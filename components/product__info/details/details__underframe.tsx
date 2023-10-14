import { FC, useCallback, useState } from "react";
import styles from "./details.module.css";
import { maskPrice } from "@/lib/utils";
import { TProduct } from "@/assets/products";
import Select from "@/components/select/select";

export type TDetailsProps = {
  product: TProduct;
  className?: string;
};

const DetailsWithUnderframe: FC<TDetailsProps> = ({ product, className }) => {
  const [underframeOption, setUnderframeOption] = useState("");
  const [countertopOption, setCountertopOption] = useState("");
  const [price, setPrice] = useState(product.price);

  const findCountertops = useCallback(
    (underframeOpt: string) => {
      const underframe = product.params[underframeOpt];
      const countertopOptions = [];
      for (let prop in underframe) {
        countertopOptions.push({ label: prop, value: underframe[prop] });
      }

      return countertopOptions;
    },
    [product.params]
  );

  const countertopOptions = findCountertops(underframeOption);

  const findSizes = useCallback(
    (countertopOpt: string) => {
      const countertop = countertopOptions.find(
        (item) => item.label === countertopOpt
      );
      const sizesOptions = [];
      if (countertop !== undefined) {
        for (let prop in countertop.value) {
          sizesOptions.push({ label: prop, value: countertop.value[prop] });
        }
      }

      return sizesOptions;
    },
    [countertopOptions]
  );

  const underframeOptions = Object.keys(product.params).map((item: string) => {
    const option = {
      value: item,
      label: item,
    };
    return option;
  });

  const sizesOptions = findSizes(countertopOption);
  const [sizeOption, setSizeOption] = useState(
    sizesOptions.length > 1 ? "" : ""
  );

  const handleUnderframeSelect = (value: string) => {
    setUnderframeOption(value);
    setCountertopOption("");
    setSizeOption("");
    setPrice(0);
  };

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

  const selectedFrame = underframeOptions.find(
    (item) => item.label === underframeOption
  );

  const selectedCountertop = countertopOptions.find(
    (item) => item.label === countertopOption
  );
  const selectedSize = sizesOptions.find((item) => item.label === sizeOption);

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
            <span className={styles.label}>
              {product.category.includes("BED")
                ? "подъемный\nмеханизм:"
                : "отделка\nоснования:"}
            </span>
            <Select
              mode='rows'
              options={underframeOptions}
              selected={selectedFrame || null}
              name='long'
              onChange={handleUnderframeSelect}
              placeholder={product.category.includes("BED") ? `наличие механизма` : `выберите отделку основания`}
            />
          </div>

          <div className={styles.selectGroup}>
            <span className={styles.label}>
            {product.category.includes("BED")
                ? "отделка:"
                : "отделка\nстолешницы:"}
            </span>
            <Select
              mode='rows'
              options={countertopOptions}
              selected={selectedCountertop || null}
              name='long'
              onChange={handleCountertopSelect}
              placeholder={product.category.includes("BED") ? `выберите отделку` : `выберите отделку столешницы`}
            />
          </div>

          <div className={styles.selectGroup}>
            <span className={styles.label}>размер:</span>
            <Select
              mode='rows'
              options={sizesOptions}
              selected={selectedSize || null}
              name='long'
              onChange={handleSizesSelect}
              placeholder={product.category.includes('BED') ? 'Выберите размер\nспального места' : 'Выберите размер'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsWithUnderframe;
