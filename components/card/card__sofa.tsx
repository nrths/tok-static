import { FC } from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { maskPrice } from "@/lib/utils";
import { useRouter } from "next/router";

export type TSofaCard = {
    product: any;
    id?: string;
    seriesTitle?: string;
    homepage?: boolean;
  };

const SofaCard: FC<TSofaCard> = ({ product, id, homepage }) => {
  const router = useRouter();
      return (
      <>
        <div className={`${styles.card} ${styles.sofa}`} id={id}>
          <Link
            href={`/products/sofas`}
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
              {product.dateOfCreation >= 2023 && (
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
              <h3
                className={
                  homepage
                    ? `${styles.cardTitleHomepage} ${styles.cardTitle}`
                    : `${styles.cardTitle}`
                }
              >
                {product.name}
              </h3>
              <span
                className={
                  homepage
                    ? `${styles.price} ${styles.priceHomepage}`
                    : `${styles.price}`
                }
              >
                от {maskPrice(product.price)} &#8381;
              </span>
            </div>
          </Link>
        </div>
      </>
    );
  
};

export default SofaCard;
