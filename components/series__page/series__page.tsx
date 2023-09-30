import { FC } from "react";
import Card from "@/components/card/card";
import styles from "../../styles/series.module.css";
import { TProductSeries } from "@/assets/series";

export type TSeriesPage = {
  series: TProductSeries;
};

const SeriesPage:FC<TSeriesPage> = ({ series }) => {
  return (
    <div className={`${styles.container}`}>
      {/* @ts-ignore */}
      {series.products.map((product) => (
        <Card product={product} key={product.id} seriesTitle={series.title}/>
      ))}
    </div>
  );
};

export default SeriesPage;
