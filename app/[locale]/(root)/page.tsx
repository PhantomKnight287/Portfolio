import Transition from "@/components/transition";
import { AiOutlineRight, AiOutlineMail } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Experiences, Projects } from "@/constants";
import Badge from "@/components/badge";
import {
  allEnglishWritings,
  allGermanWritings,
} from "@/.content-collections/generated";
import Nextjs from "@/icons/next";
import NestJS from "@/icons/nest";
import Prisma from "@/icons/prisma";
import Grafana from "@/icons/grafana";
import Flutter from "@/icons/flutter";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { EffectTS } from "@/icons/effect";
import { SITE_URL } from "@/lib/og";

const BIRTH_DATE = "2005-04-30";

function age(): number {
  return Math.floor(
    (Date.now() - new Date(BIRTH_DATE).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale });

  const title = "Gurpal Singh | PhantomKnight287";
  const description = `${t("HomePage.summary")} ${t("HomePage.description", {
    age: age(),
  })}`;

  return {
    // Absolute so the layout's "%s | Gurpal Singh" template does not repeat the name.
    title: { absolute: title },
    description,
    keywords: [
      "Gurpal Singh",
      "PhantomKnight287",
      "Full Stack Developer",
      "Next.js",
      "Nest.js",
      "React",
      "Flutter",
      "TypeScript",
      "Portfolio",
    ],
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { en: "/en", de: "/de" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/${locale}`,
      siteName: title,
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

export default async function Home() {
  const t = await getTranslations();
  const locale = await getLocale();

  const monthYear = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  });

  // "2024-06" parses as UTC midnight and can render as the previous month in
  // negative-offset timezones, so build the date locally.
  const parseMonth = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    return new Date(year, (month ?? 1) - 1, 1);
  };

  const writings = [
    ...(locale === "en" ? allEnglishWritings : allGermanWritings),
  ]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 4);

  return (
    <div className="flex mt-5 flex-col max-w-[600px] mx-auto p-5 lg:p-0">
      <div className="container">
        <h1 className="text-xl font-bold text-gray-400">
          <span className="">{t("HomePage.tagline")}</span>
          <Transition />
        </h1>
        <p className="mt-5 text-xl text-gray-400">
          {t("HomePage.description", { age: age() })}
        </p>
        <p className="mt-5 text-xl text-gray-400">
          {t("HomePage.currently")}{" "}
          <Badge href="https://nextjs.org">
            <Nextjs className="inline-flex mr-1" /> Next.js
          </Badge>
          ,{" "}
          <Badge href="https://nestjs.com">
            <NestJS className="inline-flex mr-1" /> Nest.js
          </Badge>
          ,{" "}
          <Badge href="https://www.prisma.io/" className="mr-1">
            <Prisma className="inline-block mr-1" />
            Prisma
          </Badge>
          ,{" "}
          <Badge href="https://effect.website" className="mr-1">
            <EffectTS className="inline-block mr-1" />
            Effect
          </Badge>
          ,{" "}
          <Badge href="https://grafana.com/">
            <Grafana className="inline-block mr-1" />
            Grafana
          </Badge>{" "}
          {t("HomePage.learning")}{" "}
          <Badge href={"https://flutter.dev"}>
            <Flutter className="inline-block mr-1" />
            Flutter
          </Badge>
          .
        </p>
        {locale === "de" ? (
          <>
            <p className="mt-5 text-xl text-gray-400">
              Notiz: Ich lerne Deutsch und habe beschlossen, mein Portfolio zur
              Übung zu übersetzen. Bitte verzeihen Sie mir etwaige Fehler.
            </p>
          </>
        ) : null}

        <div className="flex items-start mt-5 w-full justify-start flex-col">
          <div className="flex flex-row items-center justify-start">
            <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
            <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
              <p className="text-white">
                Available for new opportunities &middot;{" "}
                <a
                  href="https://drive.google.com/file/d/1YCyt6R_PS9A8LAalHj6ob7NqLY8X9hcq/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-600 underline-offset-4 hover:decoration-neutral-300"
                >
                  {t("HomePage.resume")}
                </a>
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-row mt-3 gap-3">
            <a
              href="https://github.com/phantomknight287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5
                text-white transition duration-300 ease-in-out
                bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
              "
            >
              <FiGithub className="text-white text-xl" />
            </a>
            <a
              href="mailto:phantomknight287@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5
                text-white transition duration-300 ease-in-out
                bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
              "
            >
              <AiOutlineMail className="text-white text-xl" />
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] "></div>

        {Experiences.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-2xl text-white">{t("Experience.title")}</h2>
            <div className="mt-4 flex flex-col">
              {[...Experiences]
                .map((exp) => (
                  <details
                    key={`${exp.company}-${exp.role}`}
                    className="group border-b border-neutral-800 py-4 last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-baseline gap-3 [&::-webkit-details-marker]:hidden">
                      <AiOutlineRight className="mt-1 shrink-0 text-sm text-neutral-500 transition-transform group-open:rotate-90" />
                      <span className="min-w-0 flex-1 text-neutral-100">
                        {exp.role} <span className="text-neutral-500">at</span>{" "}
                        {exp.company}
                      </span>
                      <span className="shrink-0 text-sm tabular-nums text-neutral-500">
                        {monthYear.format(parseMonth(exp.start))} --{" "}
                        {exp.end
                          ? monthYear.format(parseMonth(exp.end))
                          : t("Experience.present")}
                      </span>
                    </summary>
                    <div className="mt-3 flex flex-col gap-3 pl-6">
                      <ul className="flex list-disc flex-col gap-1 pl-4 text-sm text-neutral-500 marker:text-neutral-700">
                        {exp.points.map((point) => (
                          <li key={point} className="text-pretty">
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-xs text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-neutral-500 underline decoration-neutral-700 underline-offset-4 hover:text-neutral-100"
                        >
                          {exp.company}
                        </a>
                      ) : null}
                    </div>
                  </details>
                ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="text-2xl text-white">{t("Projects.title")}</h2>
          <div className="mt-4 flex flex-col">
            {Projects.map((project) => (
              <div
                key={project.slug}
                className="group flex flex-col gap-1 border-b border-neutral-800 py-4 last:border-b-0"
              >
                <div className="flex w-full items-baseline gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="min-w-0 flex-1 truncate text-neutral-100 underline-offset-4 group-hover:underline"
                  >
                    {project.name}
                  </Link>
                  <span className="flex shrink-0 items-center gap-2 text-neutral-500">
                    {project.urls.githubUrl ? (
                      <a
                        href={project.urls.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} source code`}
                        className="hover:text-neutral-100"
                      >
                        <FiGithub />
                      </a>
                    ) : null}
                    {project.urls.liveUrl ? (
                      <a
                        href={project.urls.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live site`}
                        className="hover:text-neutral-100"
                      >
                        <FiExternalLink />
                      </a>
                    ) : null}
                  </span>
                </div>
                <p className="text-pretty text-sm text-neutral-500">
                  {t(`Projects.${project.slug}.summary`)}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-2xl text-white">{t("WritingsPage.title")}</h2>
            <Link
              href="/writings"
              className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-100"
            >
              {t("HomePage.viewAll")}
              <AiOutlineRight />
            </Link>
          </div>
          <div className="mt-4 flex flex-col">
            {writings.map((writing) => (
              <Link
                className="group flex flex-col gap-1 border-b border-neutral-800 py-4 last:border-b-0"
                key={writing._meta.path}
                href={`/writings/${writing._meta.path}`}
              >
                <span className="flex w-full items-baseline gap-3">
                  <span className="min-w-0 flex-1 truncate text-neutral-100 underline-offset-4 group-hover:underline">
                    {writing.title}
                  </span>
                  <span className="shrink-0 text-sm tabular-nums text-neutral-500">
                    {monthYear.format(writing.date)}
                  </span>
                </span>
                <span className="text-pretty text-sm text-neutral-500">
                  {writing.summary}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
