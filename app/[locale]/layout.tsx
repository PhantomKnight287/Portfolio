import type { PropsWithChildren } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/og";

const font = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations(  { locale });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Gurpal Singh | PhantomKnight287",
      template: "%s | Gurpal Singh",
    },
    description: t("HomePage.summary"),
    applicationName: "Gurpal Singh | PhantomKnight287",
    authors: [
      { name: "Gurpal Singh", url: "https://github.com/phantomknight287" },
    ],
    creator: "Gurpal Singh",
    publisher: "Gurpal Singh",
    alternates: {
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Gurpal Singh | PhantomKnight287",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `${SITE_URL}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@PhantomKnight287",
      creator: "@PhantomKnight287",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout(
  props: PropsWithChildren<{ params: Promise<{ locale: string }> }>,
) {
  const { locale } = await props.params;

  return (
    <html lang={locale} className="dark">
      <NextIntlClientProvider>
        <body
          className={`${font.variable} ${mono.variable} bg-[#0A0A0A] flex justify-center font-sans`}
        >
          <main className="min-h-screen pt-10 container items-center justify-center flex-col px-0">
            {props.children}
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
