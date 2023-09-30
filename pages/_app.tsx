import "../styles/globals.css";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import { Roboto_Flex } from "next/font/google";
import styles from "../styles/layout.module.css";
// import { Metadata } from "next";
import { AppProps } from "next/app";
import { FormProvider } from "@/components/form/formContext";

export const roboto_flex = Roboto_Flex({
  subsets: ["cyrillic", "latin"],
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  // variable: '--font-robotoflex'
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ТОК - Фабрика мебели</title>
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>

      <main className={`${roboto_flex.className} ${styles.container}`}>
        <FormProvider>
          <Component {...pageProps} />{" "}
        </FormProvider>
        <Footer />
        <div id='modal-root'></div>
      </main>
    </>
  );
}
