import { ImageResponse } from "next/og";
import {
  loadOgAssets,
  OgFrame,
  NextMark,
  OgBadge,
  OG_HANDLE,
  OG_NAME,
  OG_SIZE,
  truncate,
} from "@/lib/og";
import NestJS from "@/icons/nest";
import Prisma from "@/icons/prisma";
import Grafana from "@/icons/grafana";
import Flutter from "@/icons/flutter";
import { EffectTS } from "@/icons/effect";
import en from "@/translations/en.json";
import de from "@/translations/de.json";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_SIZE;
export const alt = "Gurpal Singh — Full Stack Web and App Developer";

const MESSAGES: Record<string, typeof en> = { en, de: de as typeof en };

const ICON_SIZE = 26;

const STACK = [
  { name: "Next.js", Icon: NextMark },
  { name: "Nest.js", Icon: NestJS },
  { name: "Prisma", Icon: Prisma },
  { name: "Effect", Icon: EffectTS },
  { name: "Grafana", Icon: Grafana },
];

const LEARNING = { name: "Flutter", Icon: Flutter };

const BIRTH_DATE = "2005-04-30";

function age(): number {
  return Math.floor(
    (Date.now() - new Date(BIRTH_DATE).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  );
}

export default async function OgImage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const messages = MESSAGES[locale] ?? en;

  const headline = messages.HomePage.summary;
  const description = truncate(
    messages.HomePage.description.replace("{age}", String(age())),
    170,
  );

  const currently = messages.HomePage.currently;
  const learning = messages.HomePage.learning;

  const boldText = OG_NAME + headline;
  const regularText =
    OG_HANDLE +
    description +
    currently +
    learning +
    STACK.map((tech) => tech.name).join("") +
    LEARNING.name +
    ",." +
    "EnglishDeutsch";

  const [fonts, avatar] = await loadOgAssets(boldText, regularText);

  return new ImageResponse(
    (
      <OgFrame avatar={avatar} locale={locale}>
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
            {headline}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#9ca3af",
              lineHeight: 1.4,
              marginTop: 26,
            }}
          >
            {description}
          </span>
          {/* The "currently working with ..." sentence from page.tsx, with the
              same inline badges. Satori has no inline flow, so the sentence is
              a wrapping flex row and each badge keeps its comma attached. */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              fontSize: 30,
              color: "#9ca3af",
              rowGap: 12,
              marginTop: 38,
            }}
          >
            <span style={{ marginRight: 10 }}>{currently}</span>
            {STACK.map(({ name, Icon }, index) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <OgBadge>
                  <Icon
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    style={{ marginRight: 8 }}
                  />
                  {name}
                </OgBadge>
                {index < STACK.length - 1 ? <span>,</span> : null}
              </div>
            ))}
            <span style={{ marginRight: 10 }}>{learning}</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <OgBadge>
                <LEARNING.Icon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  style={{ marginRight: 8 }}
                />
                {LEARNING.name}
              </OgBadge>
              <span>.</span>
            </div>
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
