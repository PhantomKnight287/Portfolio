import {
  allEnglishWritings,
  allGermanWritings,
} from "@/.content-collections/generated";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { BiArrowBack } from "react-icons/bi";
import { SITE_URL } from "@/lib/og";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale });

  const title = t("WritingsPage.title");
  const description = t("WritingsPage.description");

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/writings`,
      languages: { en: "/en/writings", de: "/de/writings" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/${locale}/writings`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@PhantomKnight287",
      creator: "@PhantomKnight287",
      title,
      description,
    },
  };
}

export default async function WritingsPage() {
  const locale = await getLocale();
  const t = await getTranslations();

  const writings = [
    ...(locale === "en" ? allEnglishWritings : allGermanWritings),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const monthYear = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  });

  const isRecent = (date: Date) =>
    Date.now() - date.getTime() < 1000 * 60 * 60 * 24 * 30;

  return (
    <div className="pt-10 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-[600px]">
        <div className="flex items-center justify-between gap-3 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-100"
          >
            <BiArrowBack />
            Back
          </Link>
        </div>

        <h1 className="mt-8 text-3xl font-semibold text-neutral-100">
          {t("WritingsPage.title")}
        </h1>

        <div className="mt-6 flex flex-col">
          {writings.map((writing) => (
            <Link
              className="group flex flex-col gap-1 border-b border-neutral-800 py-4 last:border-b-0"
              key={writing._meta.path}
              href={`/writings/${writing._meta.path}`}
            >
              <span className="flex items-baseline gap-3">
                <span className="min-w-0 shrink truncate text-neutral-100 underline-offset-4 group-hover:underline">
                  {writing.title}
                </span>
                {isRecent(writing.date) ? (
                  <span className="shrink-0 rounded border border-neutral-700 px-1.5 text-xs text-neutral-300">
                    New
                  </span>
                ) : null}
                <span className="ml-auto shrink-0 text-sm tabular-nums text-neutral-500">
                  {monthYear.format(writing.date)}
                </span>
              </span>
              <span className="text-pretty text-sm text-neutral-500">
                {writing.summary}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
