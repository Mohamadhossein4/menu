import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { iranSans } from "@/lib/fonts/font";

import "../styles/globals.css";
import Header from "@/components/home/Menu";

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
    <html lang="fa" dir="rtl" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${iranSans.className} bg-pink-50 antialiase min-h-screen flex flex-col relative`}
      >
       
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
       
      </body>
    </html>
  );
}
  