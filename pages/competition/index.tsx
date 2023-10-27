import { NextPage } from "next";
import styles from "../../styles/competition.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header";
import Head from "next/head";

const CompetitionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Конкурс | ТОК-Мебель</title>
        <meta name='description' content='ADD Awards' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>лучший интерьер с&nbsp;мебелью ток</h1>
        <Image
          className={styles.image}
          width={110}
          height={51}
          src={"/images/add_awards.svg"}
          alt='ADD Awards'
          priority
        />
        <span className={styles.caption}>
          общий призовой фонд номинации: 500 000 ₽
        </span>
        <Link
          className={styles.button}
          href={"https://addawards.ru/sponsors/218053/"}
          replace
          target='_blank'
        >
          добавить проект
        </Link>
        <div className={styles.block}>
          <p className={styles.text}>
            Российский производитель мебели ТОК приглашает дизайнеров,
            архитекторов, дизайн-студии, архитектурные бюро, авторские
            коллективы, принять участие в&nbsp;нашей номинации в&nbsp;рамках ADD
            awards &laquo;Лучший интерьер с&nbsp;мебелью ТОК&raquo;.
          </p>
          <h3 className={styles.heading}>условия участия</h3>
          <p className={styles.text}>
            На&nbsp;конкурс принимаются концептуальные и&nbsp;реализованные
            проекты. В&nbsp;интерьер должна быть интегрирована мебель TOK.
            На&nbsp;1&nbsp;место может претендовать проект, включающий
            не&nbsp;менее двух предметов мебели ТОК. Принимая участие
            в&nbsp;конкурсе, участник соглашается с&nbsp;тем, что поданные
            проекты остаются в&nbsp;базе &laquo;ТОК Мебель&raquo;. Компания
            оставляет за&nbsp;собой право использовать проекты участников для
            целей PR. 3d-модели можно скачать на&nbsp;сайте компании или
            в&nbsp;профиле{" "}
            <Link
              className={styles.link}
              href={"https://3ddd.ru/users/tokmebel_mail_ru/models"}
              replace
              target='_blank'
            >
              3ddd.ru
            </Link>
            .
          </p>
          <h3 className={styles.heading}>определение победителей</h3>
          <p className={styles.text}>
            Работы оценят представители компании и&nbsp;экспертная команда
            дизайнеров. В&nbsp;конкурсе предусмотрены 1,
            2&nbsp;и&nbsp;3&nbsp;места.
          </p>
          <h3 className={styles.heading}>призы</h3>
          <div className={styles.prizes}>
            <p className={`${styles.text} ${styles.place}`}>
              <span className={styles.span}>1&nbsp;место&nbsp;</span>&mdash;
              приз 150&nbsp;000&nbsp;руб.
              <br />+ в&nbsp;подарок предмет мебели ТОК
              <br />+ фирменная статуэтка
            </p>
            <p className={styles.text}>
              <span className={styles.span}>2&nbsp;место&nbsp;</span>&mdash;
              приз 80&nbsp;000&nbsp;руб.
              <br />+ в&nbsp;подарок предмет мебели ТОК
              <br />+ фирменная статуэтка
            </p>
            <p className={styles.text}>
              <span className={styles.span}>3&nbsp;место&nbsp;</span>&mdash;
              приз 50&nbsp;000&nbsp;руб.
              <br />+ в&nbsp;подарок предмет мебели ТОК
              <br />+ фирменная статуэтка
            </p>
          </div>
          <h3 className={styles.heading}>основные этапы сезона</h3>
          <p className={styles.text}>
            15.03&nbsp;&mdash; 15.11&nbsp;&mdash; прием проектов
          </p>
          <p className={styles.text}>
            09.10&nbsp;&mdash; 18.11&nbsp;&mdash; голосование экспертного
            совета, формирование шорт-листа
          </p>
          <p className={styles.text}>
            19.11&nbsp;&mdash; 30.11&nbsp;&mdash; профессиональное голосование
            жюри
          </p>
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
