import { ImageResponse } from "next/og";
import {
  allEnglishWritings,
  allGermanWritings,
} from "@/.content-collections/generated";
import {
  formatDate,
  loadOgAssets,
  OgFrame,
  OG_HANDLE,
  OG_NAME,
  OG_SIZE,
  truncate,
} from "@/lib/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_SIZE;

export default async function OgImage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const post = [...allEnglishWritings, ...allGermanWritings].find(
    (p) => p._meta.path === params.slug && p.locale === params.locale,
  );

  const title = truncate(post?.title ?? "Not found", 90);
  const summary = truncate(post?.summary ?? "", 170);
  const date = post ? formatDate(post.date) : "";

  const boldText = OG_NAME + title;
  const regularText = OG_HANDLE + date + summary + "EnglishDeutsch";

  const [fonts, avatar] = await loadOgAssets(boldText, regularText);

  return new ImageResponse(
    (
      <OgFrame avatar={avatar} locale={params.locale}>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 72 }}
        >
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
      </OgFrame>
    ),
    {
      ...size,
      ...(fonts ? { fonts } : {}),
    },
  );
}
