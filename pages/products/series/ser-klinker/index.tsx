import Header from "@/components/header/header";
import { useRouter } from "next/router";
import { series } from "@/assets/series";
import SeriesPage from "@/components/series__page/series__page";
import Head from "next/head";

const SPage = ({ item }: any) => {
  //   const router = useRouter();
  const seoTitle = `Серия столов ${item.name.toUpperCase()} | ТОК-Мебель`
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <Header />
      <SeriesPage series={item} />
    </>
  );
};

export async function getStaticProps() {
  const data = await series.find((item) => item.title === "ser-klinker");
  return {
    props: {
      item: data,
    },
  };
}

export default SPage;
