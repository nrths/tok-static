import { useRouter } from "next/router";
import { products } from "@/assets/products";
import ProductDetails from "@/components/product__page/product__page";
import Head from "next/head";
import { Metadata, NextPage } from "next";

const ProductPage: NextPage = ({ item }: any) => {
  const router = useRouter();

  const switchSeoTitle = (category: string) => {
    let seoTitle;
    if (category.includes("CHAIR")) {
      seoTitle = `Стул ${item.name.toUpperCase()} | TOK`;
    } else if (category === "BED") {
      seoTitle = `Кровать ${item.name.toUpperCase()} | TOK`;
    } else if (category === "SOFA") {
      seoTitle = `Диван ${item.name.toUpperCase()} | TOK`;
    } else if (category.includes("CIRCLE")) {
      seoTitle = `Круглый стол ${item.name.toUpperCase()} | TOK`;
    } else if (category.includes("TABLE_DINNER LONG")) {
      seoTitle = `Обеденный стол ${item.name.toUpperCase()} | TOK`;
    } else if (category.includes("COFFEE_TABLE")) {
      seoTitle = `Журнальный стол ${item.name.toUpperCase()} | TOK`;
    } else {
      seoTitle = `Cтол ${item.name.toUpperCase()} | TOK`;
    }
    return seoTitle;
  };

  return (
    <>
      {item !== undefined && (
        <>
          <Head>
            <title>{switchSeoTitle(item.category)}</title>
            <meta name='description' content={item.description} />
          </Head>
          <ProductDetails product={item} />
        </>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const data = products;
  const paths = data.map((item) => {
    return {
      params: { title: `${item.title}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const data = await products.find((item) => item.title === params.title);
  return {
    props: {
      item: data,
    },
  };
}

export default ProductPage;
