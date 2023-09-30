import { klinker_c } from "@/assets/series";
import ProductDetails from "@/components/product__page/product__page";
import Head from "next/head";

const SPage = ({ item }: any) => {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>{item.name.toUpperCase()} | ТОК-Мебель</title>
        <meta name='description' content={item.description} />
      </Head>
      <ProductDetails product={item} />
    </>
  );
};

export async function getStaticPaths() {
  const data = await klinker_c.products;
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
  const data = klinker_c.products.find((item) => item.title === params.title);
  return {
    props: {
      item: data,
    },
  };
}

export default SPage;
