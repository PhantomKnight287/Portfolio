import Image from "next/image";
import "./globals.css";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const font = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${font.variable} ${mono.variable} bg-[#0A0A0A] flex justify-center font-sans`}
      >
        <main className="min-h-screen pt-10 container items-center justify-center flex-col px-0">
          <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
            <div className="container max-w-[600px] flex flex-row">
              <Link href="/">
                <Image
                  src="https://github.com/phantomknight287.png"
                  alt="PhantomKnigh287"
                  width={44}
                  height={44}
                  className="rounded-md"
                />
              </Link>
              <div className="flex flex-col ml-2">
                <h1 className="text-base font-bold text-white">Gurpal Singh</h1>
                <span className="text-sm text-gray-400">@PhantomKnight287</span>
              </div>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
