import { FC, useCallback, useState } from "react";
import styles from "./details.module.css";
import { maskPrice } from "@/lib/utils";
import { TProduct } from "@/assets/products";
import Select from "@/components/select/select";

export type TDetailsProps = {
  product: TProduct;
  className?: string;
};

const Details: FC<TDetailsProps> = ({ product, className }) => {
  const [countertopOption, setCountertopOption] = useState("");
  const [price, setPrice] = useState(product.price);

  const findSizes = useCallback(
    (countertopOpt: string) => {
      const countertop = product.params[countertopOpt];
      const sizesOptions = [];
      for (let prop in countertop) {
        sizesOptions.push({ label: prop, value: countertop[prop] });
      }

      return sizesOptions;
    },
    [product.params]
  );

   const countertopOptions = Object.keys(product.params).map((item: string) => {
    const option = {
      value: item,
      label: item,
    };
    return option;
  });
  const sizesOptions = findSizes(countertopOption);
  const underframeOptions = product.underframe
    ? product.underframe.map((item: string) => {
        const option = {
          value: item,
          label: item,
        };
        return option;
      })
    : undefined;

  const [sizeOption, setSizeOption] = useState(
    sizesOptions.length > 1 ? "" : ""
  );
  const [underframeOption, setUnderframeOption] = useState(
    underframeOptions !== undefined ? underframeOptions[0].label : ""
  );

  const handleCountertopSelect = (value: string) => {
    setCountertopOption(value);
    setSizeOption("");
    setPrice(0);
  };

  const handleSizesSelect = (label: string) => {
    setSizeOption(label);
    // @ts-ignore
    const price = sizesOptions.find((s) => s.label === label).value;
    setPrice(price);
  };

  const handleUnderframeSelect = (value: string) => {
    setUnderframeOption(value);
  };

  const selectedCountertop = countertopOptions.find(
    (item) => item.value === countertopOption
  );
  const selectedSize = sizesOptions.find((item) => item.label === sizeOption);
  const selectedFrame =
    underframeOptions !== undefined
      ? underframeOptions.find((item) => item.label === underframeOption)
      : "";
  
  
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
              {price === product.price ? "от " : ""}
              {maskPrice(price)} &#8381;
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
            {product.category.includes("TABLE") ? (
              <span className={styles.label}>
                отделка
                <br />
                столешницы:
              </span>
            ) : (
              <span className={styles.label}>отделка:</span>
            )}
            <Select
              mode='rows'
              options={countertopOptions}
              selected={selectedCountertop || null}
              onChange={handleCountertopSelect}
              placeholder='Выберите отделку'
            />
          </div>

          <div className={styles.selectGroup}>
            <span className={styles.label}>размер:</span>
            <Select
              mode='rows'
              options={sizesOptions}
              selected={selectedSize || null}
              onChange={handleSizesSelect}
              placeholder={"Выберите размер"}
            />
          </div>

          <div className={styles.selectGroup}>
            <span className={styles.label}>
              отделка
              <br />
              основания:
            </span>
            <Select
              mode='rows'
              options={underframeOptions ? underframeOptions : []}
              selected={selectedFrame || null}
              name='underframeInactive'
              onChange={handleUnderframeSelect}
              // placeholder='Выберите размер'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
