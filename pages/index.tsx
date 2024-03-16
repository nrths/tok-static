import Header from "@/components/header/header";
import styles from "../styles/homepage.module.css";
import NewModelsSlider from "@/components/sliders/new/slider__new";
import { newModelsList, newModelsListMobile } from "@/lib/lists";
import IconsSlider from "@/components/sliders/icons/slider_icons";
import { dignitysList, menuProductsList } from "@/lib/lists";
import NewVisualsSlider from "@/components/sliders/visuals__new/slider__visuals_new";
import Dignity from "@/components/dignity/dignity";
import { FC, useEffect, useState } from "react";
import { TProductSeries, series } from "@/assets/series";
import { TProduct, products, sofas } from "@/assets/products";
import NewModelsSliderMobile from "@/components/sliders/new_mobile/slider__new_mobile";
import Place from "@/components/place/place";
import Manufacture from "@/components/manufacture/manufacture";
import { News } from "@/lib/news";
import NewsCard from "@/components/card__news/card__news";
import { Publications } from "@/assets/publications";
import Post from "@/components/post/post";
import Link from "next/link";

export type THome = {
  products: TProduct[];
  series: TProductSeries[];
};
const Home: FC<THome> = () => {
  const [visuals, setVisuals]: any = useState([]);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const newestSeries = series.filter(
      (s) => s.products[0].dateOfCreation === 2023 || s.products[0].dateOfCreation === 2024
    );
    const newProducts = products.filter(
      (product) => product.dateOfCreation === 2023
    );
    const newestProducts = products.filter(
      (product) => product.dateOfCreation === 2024
    );
    const newestProductsWithoutKlin2 = newestProducts.filter((p) => p.title !== "klin-2");
    // const newestSofas = sofas.filter(p => p.dateOfCreation === 2024)
    const result = [...newestProductsWithoutKlin2, ...newProducts, ...newestSeries];
    setVisuals(result);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={`${styles.headingMobile}`}>
          фабрика
          <br />
          дизайнерской
          <br />
          мебели
        </h1>
        {mobile ? (
          <NewModelsSliderMobile models={newModelsListMobile} />
        ) : (
          <NewModelsSlider models={newModelsList} />
        )}
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            фабрика
            <br />
            дизайнерской&nbsp;мебели
          </h1>
        </div>
        {mobile && <IconsSlider icons={menuProductsList} />}
        <section className={`${styles.section} ${styles.newProducts}`}>
          <h2 className={`${styles.heading2} ${styles.green}`}>новые модели</h2>
          <NewVisualsSlider visuals={visuals} />
        </section>
        <section className={`${styles.section} ${styles.dignitys}`}>
          <div className={styles.list}>
            <ul className={`${styles.column} ${styles.columnFirst}`}>
              {dignitysList[0].map((item, index) => (
                <li key={index} className={styles.dignityItem}>
                  <Dignity dignity={item} />
                </li>
              ))}
            </ul>

            <ul className={styles.column}>
              {dignitysList[1].map((item, index) => (
                <li key={index} className={styles.dignityItem}>
                  <Dignity dignity={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${styles.section} ${styles.places}`}>
          <Place title={"artplay"} city={"Москва"} mobile={mobile}/>
          <Place title={"design district"} city={"Санкт-Петербург"}  mobile={mobile}/>
        </section>
        <section className={`${styles.section} ${styles.manufacture}`}>
          <Manufacture />
        </section>
        <section className={`${styles.section} ${styles.news}`}>
         {mobile ? null :  <h2 className={styles.heading2}>новости</h2>}
          <div className={styles.newsContainer}>
            {News.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {mobile ? null : <section className={`${styles.section} ${styles.publications}`}>
          <h2 className={styles.heading2}>публикации с нашей продукцией</h2>
          <div className={`${styles.publicationsContainer} custom-scroll`}>
            {Publications.slice(0, 8).map((publication) => (
              <Post key={publication.id} post={publication} homepage/>
            ))}
          </div>
          <Link href={"/smi"} className={styles.publLink}>все публикации &gt;&gt;</Link>
        </section>}
      </div>
    </>
  );
};

export default Home;
