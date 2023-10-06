import { FC } from "react";
import styles from "./card.module.css";
import { maskPrice } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export type TCard = {
  product: any;
  id?: string;
  seriesTitle?: string;
  homepage?: boolean;
};

const Card: FC<TCard> = ({ product, id, seriesTitle, homepage }) => {
  const router = useRouter();
  
  if (
    product.title === "homie" ||
    product.title === "baul" ||
    product.title === "flakon-2" ||
    product.title === "slaider" ||
    product.title === "slot" ||
    product.title === "velvet-oval" ||
    product.title === "velvet-oval-2" ||
    product.title === "velvet-oval-fl" ||
    product.title === "velvet-sl" ||
    product.title === "velvet-sl-2" ||
    product.title === "velvet-sl-fl" ||
    product.title === "velvet-krug-razdvij" ||
    product.title === "altay-razdvij"
  ) {
    return (
      <>
        <div className={`${styles.card} ${styles.dinner}`} id={id}>
          <Link
            href={`/products/${product.title}`}
            className={styles.link}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.previewImg}
              alt={product.name}
              className={styles.cardImage}
              loading={'lazy'}
            />
            <div className={styles.cardInfoWrapper}>
              {product.dateOfCreation === 2023 && (
                <span
                  className={
                    router.pathname === "/"
                      ? `${styles.new} ${styles.new__homepage}`
                      : `${styles.new}`
                  }
                >
                  новинка
                </span>
              )}
              <h3 className={homepage ? `${styles.cardTitleHomepage} ${styles.cardTitle}` : `${styles.cardTitle}`}>{product.name}</h3>
              <span className={homepage ? `${styles.price} ${styles.priceHomepage}` : `${styles.price}`}>
                от {maskPrice(product.price)} &#8381;
              </span>
            </div>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={`${styles.card}  ${styles.series}`}
          id={router.pathname === "/" ? "homepage_resize" : undefined}
        >
          <Link
            href={seriesTitle ? `/products/series/${seriesTitle}/${product.title}` : `/products/${product.title}`}
            className={styles.link}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.previewImg}
              alt={product.name}
              className={styles.cardImage}
              loading='lazy'
            />
            <div className={styles.cardInfoWrapper}>
              {product.dateOfCreation === 2023 && (
                <span
                  className={
                    router.pathname === "/"
                      ? `${styles.new} ${styles.new__homepage}`
                      : `${styles.new}`
                  }
                >
                  новинка
                </span>
              )}
              <h3 className={homepage ? `${styles.cardTitleHomepage} ${styles.cardTitle}` : `${styles.cardTitle}`}>{product.name}</h3>
              <span className={homepage ? `${styles.price} ${styles.priceHomepage}` : `${styles.price}`}>
                от {maskPrice(product.price)} &#8381;
              </span>
            </div>
          </Link>
        </div>
      </>
    );
  }
};

export default Card;
