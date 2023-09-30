import { useRouter } from "next/router";
import { products } from "@/assets/products";
import ProductDetails from "@/components/product__page/product__page";
import Head from "next/head";
import { Metadata, NextPage } from "next";

const ProductPage:NextPage = ({ item }: any) => {
  const router = useRouter();
//  const seoTitle = `${item.name.toUpperCase()} | TOK - Фабрика мебели`
  
  return (
    <>
      {item !== undefined && <ProductDetails product={item} />}
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

