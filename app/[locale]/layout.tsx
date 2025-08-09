import { PropsWithChildren } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const font = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
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
