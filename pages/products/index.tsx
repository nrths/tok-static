import Header from "@/components/header/header";
import styles from "../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { products } from "@/assets/products";
import { series } from "@/assets/series";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import FilterMenu from "@/components/filter__menu/filter__menu";
import Head from "next/head";

const ProductsPage = ({ products }: any) => {
  
  const router = useRouter();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth > 768) {
      const result = products.sort(
        (a: { position: number }, b: { position: number }) =>
          a.position - b.position
      );
      setProductsList(result)
    } else {
      const mobileResult = products.sort(
        (a: { mobilePosition: number }, b: { mobilePosition: number }) =>
          a.mobilePosition - b.mobilePosition
      );
      setProductsList(mobileResult)
    }
  }, [products])

  return (
    <>
    <Head>
      <title>Продукция | ТОК-Мебель</title>
    </Head>
      <Header />
      <FilterMenu />
      <div className={styles.empty}></div>
      {/* {result !== undefined && ( */}
        <div className={styles.container}>
          {productsList.map((item: any) => {
            if (item.title.startsWith("ser")) {
              return <SeriesCard series={item} key={item.id} />;
            } else {
              return <Card product={item} key={item.id + 100} />;
            }
          })}
        </div>
      {/* )} */}
    </>
  );
};

export async function getStaticProps() {
  const data = await [...products, ...series];
  return {
    props: {
      products: data,
    },
  };
}

export default ProductsPage;
