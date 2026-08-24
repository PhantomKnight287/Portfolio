import type { ReactNode, SVGProps } from "react";

export const SITE_URL = "https://procrastinator.fyi";

export const AVATAR_URL = "https://github.com/phantomknight287.png";

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_NAME = "Gurpal Singh";
export const OG_HANDLE = "@PhantomKnight287";

export const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  de: "Deutsch",
};

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: "normal";
};

export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  );
  if (!resource) throw new Error(`no font url for ${family}@${weight}`);
  const res = await fetch(resource[1]);
  if (!res.ok) throw new Error(`font fetch failed for ${family}@${weight}`);
  return res.arrayBuffer();
}

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++)
    binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function loadAvatar(): Promise<string> {
  const res = await fetch(AVATAR_URL);
  if (!res.ok) throw new Error("avatar fetch failed");
  const type = res.headers.get("content-type") ?? "image/png";
  return `data:${type};base64,${toBase64(await res.arrayBuffer())}`;
}

/**
 * Google serves a subsetted font, so every glyph we render has to be listed in
 * the request. `boldText`/`regularText` are the concatenated strings of the
 * card, per weight.
 */
export async function loadOgAssets(boldText: string, regularText: string) {
  return Promise.all([
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
}

export function OgFrame(props: {
  avatar: string | null;
  locale: string;
  children: ReactNode;
}) {
  return (
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
          {props.avatar ? (
            <img
              src={props.avatar}
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
              {OG_NAME}
            </span>
            <span style={{ fontSize: 28, color: "#9ca3af" }}>{OG_HANDLE}</span>
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
          <span>{LOCALE_NAMES[props.locale] ?? props.locale}</span>
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

      {props.children}
    </div>
  );
}

export function OgBadge(props: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "2px solid #262626",
        backgroundColor: "#171717",
        borderRadius: 6,
        padding: "2px 10px",
        color: "#f5f5f5",
      }}
    >
      {props.children}
    </div>
  );
}

/**
 * The Next.js mark from icons/next.tsx, minus the `mask` and the two white
 * gradients — Satori renders neither, so the app icon comes out blank here.
 * Same geometry, solid white fills.
 */
export function NextMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" fill="none" {...props}>
      <circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="white"
      />
      <rect x={115} y={54} width={12} height={72} fill="white" />
    </svg>
  );
}
