import Layout from "@/components/layout/layout";
import { Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "ТОК - Фабрика мебели",
  description:
    "ТОК - Фабрика мебели, дизайнерская мебель, Москва, Санкт-Петербург",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/favicon.ico",
    },
  ],
};

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <meta name='description' content='ТОК - Фабрика мебели' />
      </Head>
      <body className='custom-scroll'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
