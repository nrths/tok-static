import Header from "@/components/header/header";
import styles from "../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { products } from "@/assets/products";
import { series } from "@/assets/series";
import Head from "next/head";

const NewItemsPage = ({ products }: any) => {
  const circle = products.filter((product: { category: string | string[] }) =>
    product.category.includes("CIRCLE")
  );
  const dinner = products.filter((product: { category: string | string[] }) =>
    product.category.includes("LONG")
  );
  const sliding = products.filter((product: { category: string | string[] }) =>
    product.category.includes("TABLE_SLIDING")
  );
  const bed = products.filter((product: { category: string | string[] }) =>
    product.category.includes("BED")
  );
  const result = [...sliding, ...dinner, ...circle, ...bed];

  return (
    <>
      <Head>
        <title>Новинки | ТОК-Мебель</title>
        <meta
          name='description'
          content='Новые модели от фабрики дизайнерской мебели ТОК'
        />
      </Head>
      <Header />
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
  const newestProducts = products.filter(
    (product) => product.dateOfCreation === 2023
  );
  const newestSeries = series.filter(
    (s) => s.products[0].dateOfCreation === 2023
  );
  const data = await [...newestProducts, ...newestSeries];
  return {
    props: {
      products: data,
    },
  };
}

export default NewItemsPage;
