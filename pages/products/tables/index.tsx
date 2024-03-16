import Header from "@/components/header/header";
import styles from "../../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { products } from "@/assets/products";
import { series } from "@/assets/series";
import { useEffect, useState } from "react";
import FilterMenu from "@/components/filter__menu/filter__menu";
import Head from "next/head";
import SofaCard from "@/components/card/card__sofa";

const ProductsPage = ({ products }: any) => {
  const dinnerTables = products.filter(
    (product: { category: string | string[] }) =>
      product.category.includes("TABLE_DINNER")
  );
  const result = dinnerTables.sort(
      (a: { sortedPosition: number }, b: { sortedPosition: number }) =>
        a.sortedPosition - b.sortedPosition
    );

  const [productsList, setProductsList] = useState(result);
  const [active, setActive] = useState("all");

  const handleClick = (event: any, value: string, id: string) => {
    event.stopPropagation();
    if (id === "all") {
      setProductsList(dinnerTables);
      setActive("all");
    } else if (id === "dinner") {
      const list = result.filter((product: { category: string }) =>
        product.category.includes(value)
      );
      const circle = list.filter((product: { category: string }) =>
        product.category.includes("CIRCLE")
      );
      const long = list.filter((product: { category: string }) =>
        product.category.includes("LONG")
      );
      const bar = list.filter((product: { category: string }) =>
        product.category.includes("BAR")
      );
      const updatedList = [...circle, ...bar, ...long];
      setProductsList(updatedList);
      setActive(id);
    } else {
      const updatedList = result.filter((product: { category: string }) =>
        product.category.includes(value)
      );
      setProductsList(updatedList);
      setActive(id);
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
            {"нераздвижные"}
          </div>
        </div>
      </div>
      {result !== undefined && (
        <div className={`${styles.container} ${styles.tables}`}>
          {productsList.map((item: any) => {
            if (item.title.startsWith("ser")) {
              return <SeriesCard series={item} key={item.id} />;
            } else if (item.title === 'klin-2') {
              return <SofaCard product={item} key={item.id} />;
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
