import { FC, useState } from "react";
import styles from "./details.module.css";
import { maskPrice } from "@/lib/utils";
import { TProduct } from "@/assets/products";
import Select from "@/components/select/select";

export type TDetailsProps = {
  product: TProduct;
  className?: string;
};

const SofaDetails: FC<TDetailsProps> = ({ product, className }) => {
  const [price, setPrice] = useState(product.price);

  const upholsteryOptions = Object.keys(product.params).map((item: string) => {
    const option = {
      value: item,
      label: item,
    };
    return option;
  });

  const [upholsteryOption, setUpholsteryOption] = useState(
    upholsteryOptions.length > 1 ? "" : ""
  );

  const handleUpholsterySelect = (label: string) => {
    setUpholsteryOption(label);
    setPrice(product.params[label]);
  };

  const selectedUpholstery = upholsteryOptions.find(
    (item) => item.label === upholsteryOption
  );

  return (
    <>
      <div className={`${styles.baseInfo} ${className}`}>
        <h1
          className={`${
            product.name.length > 10 ? `${styles.titleLong}` : `${styles.title}`
          } ${styles.display__none}`}
        >
          {product.name}
        </h1>
        <h2
          className={`${styles.heading2} ${styles.pb60} ${styles.priceContainer}`}
        >
          цена:{" "}
          {price !== 0 && (
            <span className={styles.price}>
              от {maskPrice(price)} &#8381;
            </span>
          )}
          {price === 0 && (
            <span className={`${styles.price} ${styles.priceZero}`}></span>
          )}
        </h2>
        <div className={styles.parameters}>
          <h3 className={`${styles.heading3} ${styles.parametersHeading}`}>
            выберите параметры:
          </h3>
          <div className={styles.selectGroup}>
            <span className={styles.label}>
              материал
              <br />
              обивки:
            </span>

            <Select
              mode='rows'
              options={upholsteryOptions}
              selected={selectedUpholstery || null}
              onChange={handleUpholsterySelect}
              placeholder='Выберите отделку'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SofaDetails;
