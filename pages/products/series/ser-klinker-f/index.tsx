import Header from "@/components/header/header";
import { useRouter } from "next/router";
import { series } from "@/assets/series";
import SeriesPage from "@/components/series__page/series__page";
import Head from "next/head";

const SPage = ({ item }: any) => {
  //   const router = useRouter();

  return (
    <>
      <Head>
        <title>Серия {item.name.toUpperCase()} | ТОК-Мебель</title>
      </Head>
      <Header />
      <SeriesPage series={item} />
    </>
  );
};

export async function getStaticProps() {
  const data = await series.find((item) => item.title === "ser-klinker-f");
  return {
    props: {
      item: data,
    },
  };
}

export default SPage;
