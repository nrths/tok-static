import { TProduct } from "@/assets/products";
import styles from "./download__widget.module.css";
import { FC } from "react";
import Link from "next/link";
import { pointYandexGoal } from "@/lib/utils";

export type TDownloadProps = {
  product: TProduct;
};

const DownloadWidget: FC<TDownloadProps> = ({ product }) => {
  return (
    <div className={styles.downloadButtonsWrapper}>
      {product.model && (
        <Link
          href={product.model}
          target='_blank'
          className={styles.downloadButton}
          // onClick={() => pointYandexGoal("переход на я.диск для скачивания")}
        >{`3d max (corona render)`}</Link>
      )}
      {product.collage && (
        <Link
          href={product.collage}
          target='_blank'
          className={styles.downloadButton}
          // onClick={() => pointYandexGoal("переход на я.диск для скачивания")}
        >{`картинки для коллажей (jpg)`}</Link>
      )}
      {product.catalogue && (
        <Link
          href={product.catalogue}
          target='_blank'
          className={styles.downloadButton}
          // onClick={() => pointYandexGoal("переход на я.диск для скачивания")}
        >{`каталог товара`}</Link>
      )}
      {product.advice && (
        <Link
          href={product.advice}
          target='_blank'
          className={styles.downloadButton}
          // onClick={() => pointYandexGoal("переход на я.диск для скачивания")}
        >{`советы по уходу`}</Link>
      )}
    </div>
  );
};

export default DownloadWidget;
