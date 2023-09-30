/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from './about_mobile.module.css'

const AboutMobile: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container__text}>
          <p className={styles.text}>
            Мы работаем в России и стараемся использовать только российские
            ресурсы. Мы делаем так потому, что любим нашу страну и верим в то,
            что в России есть все возможности для создания высококачественного
            продукта, конкурентного на мировом рынке.
          </p>
          <p className={styles.text}>
            Каждая деталь — от выбора материала до цвета упаковки — является
            эксклюзивной разработкой дизайнеров и специалистов бренда ТОК.
          </p>
          <p className={styles.text}>
            Мы по настоящему заботимся о качестве нашей продукции, ведем
            контроль всего производственного процесса, начиная от заготовки
            сырья до продажи готовой продукции.
          </p>
          <p className={styles.text}>
            За каждым предметом стоит большой труд не только дизайнеров, а также
            технологов, конструкторов и ремесленников компании.
          </p>
          <p className={styles.text}>
            Наша мебель проектируется и производится в Санкт-Петербурге,
            постоянно ведется работа над совершенствованием технологии и
            производственных процессов.
          </p>
          <p className={styles.text}>
            Безупречное качество исполнения — достоинства, которыми, без
            преувеличения, обладают все продукты ТОК.
          </p>
        </div>

        <div className={styles.gallery}>
          <div className={styles.gallery__item}>
            <img
              src='/images/other/about1.jpg'
              alt=''
              className={`${styles.gallery__image} ${styles.gallery__image_main}`}
            />
          </div>
          <div className={styles.gallery__item}>
            <img
              src='/images/other/about2.jpg'
              alt=''
              className={styles.gallery__image_s}
            />
            <img
              src='/images/other/about3.jpg'
              alt=''
              className={styles.gallery__image_s}
            />
            <img
              src='/images/other/about4.jpg'
              alt=''
              className={styles.gallery__image_s}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMobile;
