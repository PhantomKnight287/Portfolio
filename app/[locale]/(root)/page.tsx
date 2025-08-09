import Transition from "@/components/transition";
import { AiOutlineRight, AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Projects } from "@/constants";
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

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale: locale });

  return {
    title: "Gurpal Singh | PhantomKnight287",
    description: t("HomePage.summary"),
    openGraph: {
      title: "Gurpal Singh | PhantomKnight287",
      description: t("HomePage.summary"),
      type: "website",
      url: "https://phantomknight287.github.io/",
      siteName: "Gurpal Singh | PhantomKnight287",
      images: [
        {
          url: "https://github.com/phantomknight287.png",
          width: 200,
          height: 200,
          alt: "PhantomKnight287",
        },
      ],
    },
    twitter: {
      site: "@PhantomKnight287",
      title: "Gurpal Singh | PhantomKnight287",
      description: t("HomePage.summary"),
      card: "summary_large_image",
      creator: "gurpalsingh287",
      images: [
        {
          url: "https://github.com/phantomknight287.png",
          width: 200,
          height: 200,
        },
      ],
    },
  };
}

function getProjectSummaryString(
  project: (typeof Projects)[number]
): `Projects.${string}.summary` {
  return `Projects.${project.slug}.summary` as const;
}

export default async function Home() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <div className="flex mt-5 flex-col max-w-[600px] mx-auto p-5 lg:p-0">
      <div className="container">
        <h1 className="text-xl font-bold text-gray-400">
          <span className="">{t("HomePage.tagline")}</span>
          <Transition />
        </h1>
        <p className="mt-5 text-xl text-gray-400">
          {t("HomePage.description", {
            age: Math.floor(
              (new Date().getTime() - new Date("2005-04-30").getTime()) /
                (1000 * 60 * 60 * 24 * 365.25)
            ),
          })}
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
          <Badge href="https://grafana.com/" className="ml-10">
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
        {locale == "de" ? (
          <>
            <p className="mt-5 text-xl text-gray-400">
              Notiz: Ich lerne Deutsch und habe beschlossen, mein Portfolio zur
              Übung zu übersetzen. Bitte verzeihen Sie mir etwaige Fehler.
            </p>
          </>
        ) : null}

        <div className="flex items-start mt-5 w-full justify-start flex-col">
          {/* <div className="flex flex-row items-center justify-start">
              <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
              <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
                <p className="text-white">Available for new opportunities</p>
              </div>
            </div> */}
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
        <div className="mt-5">
          <h1 className="text-2xl text-white mt-5 mb-5">
            {t("Projects.title")}
          </h1>
          <div className="flex flex-col">
            {Projects.map((project) => (
              <Link
                className="proj group"
                key={project.name.replace(" ", "-")}
                href={`/projects/${project.slug}`}
              >
                <article className="flex flex-row gap-0 items-start justify-between lg:justify-start mt-1 mb-1 w-full overflow-hidden">
                  <div className="flex flex-row gap-2 justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-lg leading-[1.3em] text-left text-gray-300 group-hover:text-white inline-flex underline">
                      {project.name}
                    </h1>
                    <p className="line-clamp-1 text-gray-400 max-w-full">
                      {t(`Projects.${project.slug}.summary`)}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl text-white mt-5 mb-5">Writings</h1>
          <div className="flex flex-col">
            {[
              ...(locale === "en" ? allEnglishWritings : allGermanWritings),
            ].map((writing) => (
              <Link
                className="proj group"
                key={writing._meta.path}
                href={`/writings/${writing._meta.path}`}
              >
                <article className="flex flex-row gap-0 items-start justify-between lg:justify-start mt-1 mb-1 w-full overflow-hidden">
                  <div className="flex flex-row gap-2 justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-lg leading-[1.3em] text-left text-gray-300 group-hover:text-white inline-flex underline line-clamp-1 overflow-ellipsis">
                      {writing.title}
                    </h1>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
