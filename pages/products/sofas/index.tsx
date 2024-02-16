import Header from "@/components/header/header";
import styles from "../../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { products, sofas } from "@/assets/products";
import { series } from "@/assets/series";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import FilterMenu from "@/components/filter__menu/filter__menu";
import Head from "next/head";

const SofasPage = ({ products }: any) => {
  const result = products.sort(
    (a: { position: number }, b: { position: number }) =>
      a.position - b.position
  );

  return (
    <>
      <Head>
        <title>Диваны | ТОК-Мебель</title>
        <meta
          name='description'
          content='Диваны от фабрики дизайнерской мебели ТОК'
        />
      </Head>
      <Header />
      <FilterMenu />
      <div className={styles.empty}></div>
      <div className={styles.container}></div>
      {result !== undefined && (
        <div className={styles.container}>
          {result.map((item: any) => {
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
  const data = [...sofas];
  const couches = data.filter(
    (product: { category: string }) => product.category === "SOFA"
  );
  return {
    props: {
      products: couches,
    },
  };
}

export default SofasPage;
