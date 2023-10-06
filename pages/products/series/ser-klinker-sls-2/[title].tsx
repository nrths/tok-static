import { klinker_sls } from "@/assets/series";
import ProductDetails from "@/components/product__page/product__page";
import Head from "next/head";

const SPage = ({ item }: any) => {
  const seoTitle = `${item.name.toUpperCase()} | ТОК-Мебель`
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={item.description} />
      </Head>
      <ProductDetails product={item} />
    </>
  );
};

export async function getStaticPaths() {
  const data = await klinker_sls.products;
  const paths = data.map((item) => {
    return {
      params: { title: `${item.title}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const data = klinker_sls.products.find((item) => item.title === params.title);
  return {
    props: {
      item: data,
    },
  };
}

export default SPage;
