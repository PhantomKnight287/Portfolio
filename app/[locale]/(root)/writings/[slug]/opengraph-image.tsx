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

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export default async function OgImage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const post = [...allEnglishWritings, ...allGermanWritings].find(
    (p) => p._meta.path === params.slug && p.locale === params.locale
  );

  const title = truncate(post?.title ?? "Not found", 90);
  const summary = truncate(post?.summary ?? "", 180);

  return new ImageResponse(
    (
      <div tw="flex w-full h-full relative" style={{ backgroundColor: "#0b0b0f" }}>
        <div
          tw="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)",
          }}
        />
        <div tw="flex flex-col w-full h-full text-white p-16">
          <div tw="flex-1 flex flex-col justify-center">
            <div tw="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-12">
              <div tw="flex items-center justify-between mb-6">
                <span tw="text-xl tracking-wide text-slate-300">Writings</span>
                <span tw="text-base text-slate-400">{params.locale}</span>
              </div>
              <h1 tw="text-6xl leading-tight font-extrabold text-white">{title}</h1>
              {summary ? (
                <p tw="mt-6 text-2xl leading-snug text-slate-300 max-w-[950px]">
                  {summary}
                </p>
              ) : null}
              <div tw="flex items-center justify-between mt-10">
                <span tw="text-lg text-slate-400">{post?._meta.path ?? ""}</span>
                <span tw="text-lg text-slate-400">procrastinator.fyi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
