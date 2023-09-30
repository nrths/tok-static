import Image from "next/image";
import styles from "./manufacture.module.css";

const Manufacture = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>производство</h2>
      <p className={styles.description}>Санкт-Петербург</p>
      <p className={styles.text}>
        Мы&nbsp;работаем в&nbsp;России и&nbsp;стараемся использовать только
        российские ресурсы. Мы&nbsp;делаем так потому, что любим нашу страну
        и&nbsp;верим в&nbsp;то, что в&nbsp;России есть все возможности для
        создания высококачественного продукта, конкурентного на&nbsp;мировом
        рынке.
      </p>
      <p className={styles.text}>
        Каждая деталь&nbsp;&mdash; от&nbsp;выбора материала до&nbsp;цвета
        упаковки&nbsp;&mdash; является эксклюзивной разработкой дизайнеров
        и&nbsp;специалистов бренда ТОК и&nbsp;сделана с&nbsp;любовью.
      </p>
      <Image src={"/images/other/manufacture.png"} alt={""} priority fill unoptimized className={styles.img}/>
    </div>
  );
};

export default Manufacture;
