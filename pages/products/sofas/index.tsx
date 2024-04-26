import Header from "@/components/header/header";
import styles from "../../../styles/products.module.css";
import Card from "@/components/card/card";
import SeriesCard from "@/components/card/card__series";
import { allSetsTakt } from "@/assets/products";
import FilterMenu from "@/components/filter__menu/filter__menu";
import Head from "next/head";
import ConfigurationSofa from "@/components/configuration__sofa/configuration__sofa";

const SofasPage = ({ products }: any) => {
  const result = products.sort(
    (a: { id: number }, b: { id: number }) =>
      a.id - b.id
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
      {/* <div className={styles.container}></div> */}
      {result !== undefined && (
        <div className={styles.container}>
          {result.map((item: any) => {
            if (item.title.startsWith("ser")) {
              return <SeriesCard series={item} key={item.id} />;
            } else {
              return <Card product={item} key={item.id + 100} />;
            }
          })}
          <ConfigurationSofa />
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const data = [...allSetsTakt];
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
