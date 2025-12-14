import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { iranSans } from "@/lib/fonts/font";

import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { morabba } from "@/lib/fonts/font";

export const metadata: Metadata = {
  title: "بستنی تایسی رول",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${morabba.className} bg-[url('/images/background.jpg')] md:bg-cover `}
      >
       <Header/>
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
       <Footer/>
      </body>
    </html>
  );
}
  