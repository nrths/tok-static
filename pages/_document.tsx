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

        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(70284832, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor: true,
                });

                ym(95115536, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor: true,
            });
              `,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='https://mc.yandex.ru/watch/12345678'
              style={{ position: "absolute", left: "-9999px" }}
              alt=''
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
