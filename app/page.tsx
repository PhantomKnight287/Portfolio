import Transition from "@/components/transition";
import Link from "next/link";
import { AiOutlineRight, AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import styles from "./page.module.css";
import clsx from "clsx";
import { Projects } from "@/constants";

export const metadata = {
  title: "Gurpal Singh | PhantomKnight287",
  description: "I am a Full Stack Web Developer from India.",
  openGraph: {
    title: "Gurpal Singh | PhantomKnight287",
    description: "I am a Full Stack Web Developer from India.",
    // @ts-ignore
    type: "website",
    url: "https://phantomknight287.github.io/",
    site_name: "Gurpal Singh | PhantomKnight287",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/76196237",
        width: 50,
        height: 50,
        alt: "PhantomKnight287",
      },
    ],
  },
  twitter: {
    site: "@PhantomKnight287",
    title: "Gurpal Singh | PhantomKnight287",
    description: "I am a Full Stack Web Developer from India.",
    card: "summary_large_image",
    creator: "gurpalsingh287",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/76196237",
        width: 50,
        height: 50,
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen pt-10 container items-center justify-center flex-col">
      <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
        <div className="container max-w-[512px] flex flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/76196237"
            alt="PhantomKnigh287"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h1 className="text-base font-bold text-white">Gurpal Singh</h1>
            <span className="text-sm text-gray-400">@PhantomKnight287</span>
          </div>
        </div>
      </div>
      <div className="flex mt-10 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
        <div className="container">
          <h1 className="text-xl font-bold text-gray-400">
            I make
            <Transition />
          </h1>
          <p className="mt-5 text-xl text-gray-400">
            I&apos;m Gurpal Singh, an 18 year old developer living in India. I
            am a self-taught developer who loves to code and make things.
          </p>
        </div>
        <div className="flex items-start mt-5 w-full justify-start flex-col">
          <div className="flex flex-row items-center justify-start">
            <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
            <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
              <p className="text-white">Available for new opportunities</p>
            </div>
          </div>
          <br />
          <div className="flex flex-row mt-3 gap-3">
            <a
              href="https://github.com/phantomknight287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out
              bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2.5  
            "
            >
              <FiGithub className="text-gray-400 text-xl" />
            </a>
            <a
              href="mailto:phantomknight287@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out
              bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2.5  
            "
            >
              <AiOutlineMail className="text-gray-400 text-xl" />
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] "></div>
        <div className="mt-5">
          <h1 className="text-2xl text-white mt-5">Projects</h1>
          <div className="flex flex-col">
            {Projects.map((project) => (
              <a
                key={project.name.replace(" ", "-")}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <article
                  className={clsx(
                    "flex flex-row gap-3 items-center justify-between lg:justify-center mt-3 mb-3 w-full",
                    styles.article
                  )}
                >
                  <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto;">
                    <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 ">
                      {project.name}
                    </h1>
                  </div>
                  <div className="w-full h-[1px] bg-gray-700 transition-all duration-[110ms] hidden lg:block"></div>
                  <AiOutlineRight
                    className="text-gray-400 transition-all duration-[110ms]"
                    size={20}
                  />
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
