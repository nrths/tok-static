import { NextPage } from "next";
import styles from "../../styles/contact.module.css";
import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Place from "@/components/place/place";
import FormContact from "@/components/form/formContact";
import Head from "next/head";

const ContactsPage: NextPage = () => {
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
        <title>Контакты | ТОК-Мебель</title>
        <meta name='description' content='tokmebel@mail.ru' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>контакты</h1>
        <div className={styles.showrooms}>
          <div className={styles.showroom} id='spb'>
            <div className={styles.line}>
              <h2 className={styles.heading2}>
                design district
                <br />
                <span className={styles.subheading}>(Санкт-Петербург)</span>
              </h2>
              <Link
                href={"https://yandex.ru/maps/-/CDU4UB62"}
                target='_blank'
                className={styles.button__map}
              >
                <Image
                  className={styles.image}
                  width={30}
                  height={50}
                  src={"/images/map.svg"}
                  alt=''
                  priority
                />
                на карте
              </Link>
            </div>
            <div className={styles.block}>
              <div className={styles.tour}>
                <Place title={"design district"} city={""} contacts />
              </div>
              <div className={styles.infoContainer}>
                <h3 className={styles.heading3}>выставочный зал</h3>
                <p className={`${styles.text} ${styles.address}`}>
                  Адрес: Россия, г. Санкт-Петербург,
                  <br />
                  Красногвардейская площадь, д&nbsp;3Е,
                  <br />
                  1&nbsp;этаж, секция &#8470; Е1&nbsp;375
                  <br />
                  DAA&nbsp;Design&nbsp;District
                </p>
                <p className={`${styles.text} ${styles.info}`}>
                  Время работы:
                  <br />
                  с&nbsp;10:00 до&nbsp;20:00
                  <br />
                  <a href="tel:+79119200499">Телефон: +7 (911) 920-04-99</a>
                  <br />
                  e-mail: <a className={styles.email} href="mailto:sales@tok-mebel.ru">sales@tok-mebel.ru</a>
                </p>
                <Link
                href={"https://yandex.ru/maps/-/CDqdIOp2"}
                target='_blank'
                className={styles.button__map_desktop}
              >
                <Image
                  className={styles.image}
                  width={30}
                  height={50}
                  src={"/images/map.svg"}
                  alt=''
                  priority
                />
                на карте
              </Link>
              </div>
            </div>
          </div>
          <div className={styles.showroom} id='moscow'>
            <div className={styles.line}>
              <h2 className={styles.heading2}>
                artplay
                <br />
                <span className={styles.subheading}>(Москва)</span>
              </h2>
              <Link
                href={"https://yandex.ru/maps/-/CDU4UB62"}
                target='_blank'
                className={styles.button__map}
              >
                <Image
                  className={styles.image}
                  width={30}
                  height={50}
                  src={"/images/map.svg"}
                  alt='3D'
                />
                на карте
              </Link>
            </div>
            <div className={styles.block}>
              <div className={styles.tour}>
                <Place title={"artplay"} city={"Москва"} contacts />
              </div>
              <div className={styles.infoContainer}>
                <h3 className={styles.heading3}>выставочный зал</h3>
                <p className={`${styles.text} ${styles.address}`}>
                  Адрес: Россия, г. Москва,
                  <br />
                  ул. Нижняя Сыромятническая,
                  <br />
                  д.&nbsp;10, стр.&nbsp;5, 1&nbsp;этаж, помещение 102
                  <br />
                  Центр дизайна ARTPLAY
                </p>
                <p className={`${styles.text} ${styles.info}`}>
                  Время работы:
                  <br />
                  с&nbsp;10:00 до&nbsp;20:00
                  <br />
                  <a href="tel:+79111003777">Телефон: +7 (911) 100-37-77</a>
                  <br />
                  e-mail: <a className={styles.email} href="mailto:sales@tok-mebel.ru">sales@tok-mebel.ru</a>
                </p>
                <Link
                href={"https://yandex.ru/maps/-/CDU4UB62"}
                target='_blank'
                className={styles.button__map_desktop}
              >
                <Image
                  className={styles.image}
                  width={30}
                  height={50}
                  src={"/images/map.svg"}
                  alt='3D'
                />
                на карте
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <FormContact id='contact' mobile={mobile}/>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
