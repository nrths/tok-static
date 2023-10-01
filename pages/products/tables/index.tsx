import Header from "@/components/header/header";
import styles from "../../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { products } from "@/assets/products";
import { series } from "@/assets/series";
import { useState } from "react";
import FilterMenu from "@/components/filter__menu/filter__menu";
import Head from "next/head";
import { pointYandexGoal } from "@/lib/utils";

const ProductsPage = ({ products }: any) => {
  const result = products.sort(
    (a: { sortedPosition: number }, b: { sortedPosition: number }) =>
      a.sortedPosition - b.sortedPosition
  );
  const [productsList, setProductsList] = useState(result);
  const [active, setActive] = useState("all");

  const handleClick = (event: any, value: string, id: string) => {
    event.stopPropagation();
    if (id === "all") {
      setProductsList(result);
      setActive("all");
      pointYandexGoal("использована внутренняя фильтрация столов")
    } else {
      const updatedList = result.filter((product: { category: string }) =>
        product.category.includes(value)
      );
      setProductsList(updatedList);
      setActive(id);
      pointYandexGoal("использована внутренняя фильтрация столов")
    }
  };

  return (
    <>
      <Head>
        <title>Столы | ТОК-Мебель</title>
      </Head>
      <Header />
      <FilterMenu />
      <div className={styles.container}>
        <div className={styles.menuList}>
          <div
            className={
              active === "all"
                ? `${styles.menuItem} ${styles.active}`
                : `${styles.menuItem}`
            }
            id='all'
            onClick={(e) => handleClick(e, "TABLE", "all")}
            // @ts-ignore
            disabled={active === "all"}
          >
            {"все столы"}
          </div>

          <div
            className={
              active === "coffee"
                ? `${styles.menuItem} ${styles.active}`
                : `${styles.menuItem}`
            }
            id='coffee'
            onClick={(e) => handleClick(e, "COFFEE_TABLE", "coffee")}
            // @ts-ignore
            disabled={active === "coffee"}
          >
            {"журнальные"}
          </div>

          <div
            className={
              active === "circle"
                ? `${styles.menuItem} ${styles.active}`
                : `${styles.menuItem}`
            }
            id='circle'
            onClick={(e) => handleClick(e, "TABLE_CIRCLE", "circle")}
            // @ts-ignore
            disabled={active === "circle"}
          >
            {"круглые"}
          </div>

          <div
            className={
              active === "sliding"
                ? `${styles.menuItem} ${styles.active}`
                : `${styles.menuItem}`
            }
            id='sliding'
            onClick={(e) => handleClick(e, "TABLE_SLIDING", "sliding")}
            // @ts-ignore
            disabled={active === "sliding"}
          >
            {"раздвижные"}
          </div>

          <div
            className={
              active === "dinner"
                ? `${styles.menuItem} ${styles.active}`
                : `${styles.menuItem}`
            }
            id='dinner'
            onClick={(e) => handleClick(e, "TABLE_DINNER", "dinner")}
            // @ts-ignore
            disabled={active === "dinner"}
          >
            {"обеденные"}
          </div>
        </div>
      </div>
      <div className={styles.container}></div>
      {result !== undefined && (
        <div className={styles.container}>
          {productsList.map((item: any) => {
            if (item.title.startsWith("ser")) {
              return <SeriesCard series={item} key={item.id} />;
            } else {
              return <Card product={item} key={item.id + 100} />;
            }
          })}
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const data = await [...products, ...series];
  const tables = data.filter((product: { category: string }) =>
    product.category.includes("TABLE")
  );
  return {
    props: {
      products: tables,
    },
  };
}

export default ProductsPage;
