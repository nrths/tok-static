import Header from "@/components/header/header";
import styles from ".././../styles/for-designers.module.css";
import { NextPage } from "next";
import FormForDesigners from "@/components/form/formForDesigners";
import Head from "next/head";
import { useState, useEffect } from "react";

const ForDesignersPage: NextPage = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth <= 820) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Дизайнерам | ТОК-Мебель</title>
        {/* <meta name='description' content='' /> */}
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>дизайнерам</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              Приглашаем к&nbsp;взаимовыгодному <br />
              сотрудничеству дизайнеров интерьера, архитекторов
              и&nbsp;декораторов.
            </p>
            <p>
              Для того чтобы начать сотрудничество, требуется подтвердить
              профессиональную деятельность.
              <br />
              Просьба направить на&nbsp;почту ссылку на&nbsp;ваш сайт или
              профиль в&nbsp;социальных сетях или диплом подтверждающий
              профильное образование в&nbsp;сфере дизайна интерьера или
              архитектуры.
            </p>
            <p>
              Мы&nbsp;предлагаем сотрудничество как с&nbsp;физическими, так
              и&nbsp;с&nbsp;юридическими лицами. Условия сотрудничества
              определяются в&nbsp;соответствии с&nbsp;выбранным форматом
              договора.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <FormForDesigners mobile={mobile}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForDesignersPage;
