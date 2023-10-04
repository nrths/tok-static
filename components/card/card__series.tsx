import { FC } from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { maskPrice } from "@/lib/utils";
import { useRouter } from "next/router";

export type TSeriesCard = {
  series: any;
  id?: string;
  homepage?: boolean;
};

const SeriesCard: FC<TSeriesCard> = ({ series, id, homepage }) => {
  // console.log(series);
  const router = useRouter();
  if (
    series.title === "ser-klinker-ov" ||
    series.title === "ser-klinker-sls-2" ||
    series.title === "ser-klinker-f-r"
  ) {
    return (
      <>
        <div className={`${styles.card} ${styles.dinner}`} id={id}>
          <Link
            href={`/products/series/${series.title}`}
            className={styles.link}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={series.previewImg}
              alt={series.name}
              className={styles.cardImage}
              loading='lazy'
            />
            <div className={styles.cardInfoWrapper}>
              {series.products[0].dateOfCreation === 2023 && (
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
              <h3 className={homepage ? `${styles.cardTitleHomepage} ${styles.cardTitle}` : `${styles.cardTitle}`}>{series.name}</h3>
              <span className={homepage ? `${styles.price} ${styles.priceHomepage}` : `${styles.price}`}>
                {/* [3] потому что рельеф п-50 с самой низкой ценой */}
                от {maskPrice(series.products[3].price)} &#8381;
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
          className={`${styles.card}`}
          id={router.pathname === "/" ? "homepage_resize" : undefined}
        >
          <Link
            href={`/products/series/${series.title}`}
            className={styles.link}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={series.previewImg}
              alt={series.name}
              className={styles.cardImage}
            />
            <div className={styles.cardInfoWrapper}>
              {series.products[0].dateOfCreation === 2023 && (
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
              <h3 className={homepage ? `${styles.cardTitleHomepage} ${styles.cardTitle}` : `${styles.cardTitle}`}>{series.name}</h3>
              <span className={homepage ? `${styles.price} ${styles.priceHomepage}` : `${styles.price}`}>
                от {maskPrice(series.products[3].price)} &#8381;
              </span>
            </div>
          </Link>
        </div>
      </>
    );
  }
};

export default SeriesCard;
