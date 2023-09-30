import { FC } from "react";
import styles from "./description.module.css";
import { switchCategory } from "@/lib/utils";
import DropdownBlock from "@/components/dropdown__block/dropdown__block";

export type TDescriptionProps = {
  product: any;
};

const Description: FC<TDescriptionProps> = ({ product }) => {
  return (
    <>
      <div className={`${styles.baseInfo} ${styles.display__none}`}>
        <div className={styles.descriptionBlockWrapper}>
          <h2 className={`${styles.heading2} ${styles.p25}`}>
            {"продукция /"}{" "}
            {
              <span className={styles.category}>{`${switchCategory(
                product.category
              )}`}</span>
            }
          </h2>
          <div className={styles.description}>
            <h3 className={styles.heading3}>описание</h3>
            <p className={`${styles.description__text} ${styles.text}`}>
              {product.description}
            </p>
          </div>
        </div>
        <span className={`${styles.info} ${styles.text}`}>
          дизайнер: {product.designer}
          <br />
          год создания: {product.dateOfCreation}
        </span>
      </div>
      <div className={`${styles.mobileContainer} displayMobileBlock`}>
        <h2 className={`${styles.heading2} ${styles.p25}`}>
          {"продукция /"}{" "}
          {
            <span className={styles.category}>{`${switchCategory(
              product.category
            )}`}</span>
          }
        </h2>
        <h1
          className={
            product.name.length > 10 ? `${styles.titleLong}` : `${styles.title}`
          }
        >
          {product.name}
        </h1>
        <DropdownBlock
          loading={false}
          title={"описание"}
          className={`displayMobileBlock`}
        >
          <div className={`${styles.baseInfo}`}>
            <div className={styles.description}>
              <p className={`${styles.description__text} ${styles.text}`}>
                {product.description}
              </p>
            </div>
            <span className={`${styles.info} ${styles.text}`}>
              дизайнер: {product.designer}
              <br />
              год создания: {product.dateOfCreation}
            </span>
          </div>
        </DropdownBlock>
      </div>
    </>
  );
};

export default Description;
