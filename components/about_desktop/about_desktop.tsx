import { FC } from "react";
import styles from "./about_desktop.module.css";
import Image from "next/image";
import Gallery from "../sliders/gallery/gallery";

const AboutDesktop: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          src={"/images/other/about1.jpg"}
          alt={""}
          className={styles.mainImage}
        />
        <div className={styles.textWrapper}>
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
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textWrapper}>
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
      </div>
      <div className={styles.item}>
        <Gallery />
      </div>
    </div>
  );
};

export default AboutDesktop;
