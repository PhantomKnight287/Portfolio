import { ImageResponse } from "next/og";
import {
  allEnglishWritings,
  allGermanWritings,
} from "@/.content-collections/generated";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

const AVATAR_URL = "https://github.com/phantomknight287.png";

const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  de: "Deutsch",
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

function formatDate(date: string | Date): string {
  const d = new Date(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error(`no font url for ${family}@${weight}`);
  const res = await fetch(resource[1]);
  if (!res.ok) throw new Error(`font fetch failed for ${family}@${weight}`);
  return res.arrayBuffer();
}

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function loadAvatar(): Promise<string> {
  const res = await fetch(AVATAR_URL);
  if (!res.ok) throw new Error("avatar fetch failed");
  const type = res.headers.get("content-type") ?? "image/png";
  return `data:${type};base64,${toBase64(await res.arrayBuffer())}`;
}

export default async function OgImage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const post = [...allEnglishWritings, ...allGermanWritings].find(
    (p) => p._meta.path === params.slug && p.locale === params.locale
  );

  const title = truncate(post?.title ?? "Not found", 90);
  const summary = truncate(post?.summary ?? "", 170);
  const date = post ? formatDate(post.date) : "";
  const localeName = LOCALE_NAMES[params.locale] ?? params.locale;

  const name = "Gurpal Singh";
  const handle = "@PhantomKnight287";

  // Google serves a subsetted font, so every glyph we render has to be listed.
  const boldText = name + title;
  const regularText = handle + localeName + date + summary;

  const [fonts, avatar] = await Promise.all([
    Promise.all([
      loadGoogleFont("Hanken+Grotesk", 700, boldText).then((data) => ({
        name: "Hanken Grotesk",
        data,
        weight: 700 as const,
        style: "normal" as const,
      })),
      loadGoogleFont("Hanken+Grotesk", 400, regularText).then((data) => ({
        name: "Hanken Grotesk",
        data,
        weight: 400 as const,
        style: "normal" as const,
      })),
    ]).catch(() => undefined),
    loadAvatar().catch(() => null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#111010",
          padding: "0 80px",
          fontFamily: "Hanken Grotesk",
        }}
      >
        {/* header row - mirrors the site's (root) layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {avatar ? (
              <img
                src={avatar}
                width={88}
                height={88}
                style={{ borderRadius: 12 }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  width: 88,
                  height: 88,
                  borderRadius: 12,
                  backgroundColor: "#27272a",
                }}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 20,
              }}
            >
              <span style={{ fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
                {name}
              </span>
              <span style={{ fontSize: 28, color: "#9ca3af" }}>{handle}</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#9ca3af",
              fontSize: 28,
            }}
          >
            <span>{localeName}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: 10 }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* post header - mirrors writings/[slug] */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 72 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 26, color: "#6b7280", marginTop: 18 }}>
            {date}
          </span>
          {summary ? (
            <span
              style={{
                fontSize: 32,
                color: "#9ca3af",
                lineHeight: 1.4,
                marginTop: 40,
              }}
            >
              {summary}
            </span>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
      ...(fonts ? { fonts } : {}),
    }
  );
}
