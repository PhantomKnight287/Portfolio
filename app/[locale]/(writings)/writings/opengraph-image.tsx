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
import en from "@/translations/en.json";
import de from "@/translations/de.json";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_SIZE;
export const alt = "Writings by Gurpal Singh";

const MESSAGES: Record<string, typeof en> = { en, de: de as typeof en };

const PREVIEW_COUNT = 3;

export default async function OgImage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const messages = MESSAGES[locale] ?? en;

  const title = messages.WritingsPage.title;
  const description = truncate(messages.WritingsPage.description, 150);

  const latest = [...(locale === "de" ? allGermanWritings : allEnglishWritings)]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, PREVIEW_COUNT)
    .map((writing) => ({
      title: truncate(writing.title, 52),
      date: formatDate(writing.date),
    }));

  const boldText = OG_NAME + title;
  const regularText =
    OG_HANDLE +
    description +
    latest.map((w) => w.title + w.date).join("") +
    "EnglishDeutsch";

  const [fonts, avatar] = await loadOgAssets(boldText, regularText);

  return new ImageResponse(
    (
      <OgFrame avatar={avatar} locale={locale}>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 64 }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 30,
              color: "#9ca3af",
              lineHeight: 1.4,
              marginTop: 18,
            }}
          >
            {description}
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 34,
              borderTop: "2px solid #262626",
            }}
          >
            {latest.map((writing, index) => (
              <div
                key={writing.title}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: "15px 0",
                  ...(index === latest.length - 1
                    ? {}
                    : { borderBottom: "2px solid #262626" }),
                }}
              >
                <span style={{ fontSize: 30, color: "#e5e5e5" }}>
                  {writing.title}
                </span>
                <span style={{ fontSize: 26, color: "#6b7280" }}>
                  {writing.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </OgFrame>
    ),
    {
      ...size,
      ...(fonts ? { fonts } : {}),
    },
  );
}
