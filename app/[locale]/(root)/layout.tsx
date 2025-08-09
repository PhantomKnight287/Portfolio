import Image from "next/image";
import Link from "next/link";
import LocaleSelector from "./layout.client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
        <div className="container max-w-[600px] flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <Link href="/">
              <Image
                src="https://github.com/phantomknight287.png"
                alt="PhantomKnigh287"
                width={44}
                height={44}
                className="rounded-md"
                quality={100}
              />
            </Link>
            <div className="flex flex-col ml-2">
              <h1 className="text-base font-bold text-white">Gurpal Singh</h1>
              <span className="text-sm text-gray-400">@PhantomKnight287</span>
            </div>
          </div>
          <LocaleSelector />
        </div>
      </div>
      {children}
    </>
  );
}
