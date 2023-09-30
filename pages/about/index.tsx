import type { NextPage } from "next";
import Header from "@/components/header/header";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import AboutMobile from "@/components/about_mobile/about_mobile";
import AboutDesktop from "@/components/about_desktop/about_desktop";

const AboutPage: NextPage = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>О нас | ТОК-Мебель</title>
        <meta name='description' content='Фабрика дизайнерской мебели ТОК' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>о компании</h1>
        {mobile ? <AboutMobile /> : <AboutDesktop />}
      </div>
    </>
  );
};

export default AboutPage;
