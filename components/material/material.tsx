import { FC, useState } from "react";
import styles from "./material.module.css";
import Image from "next/image";
import { TMaterial, TMaterialGroup } from "@/assets/materials";

export type MaterialProps = {
  material: TMaterial;
  category: TMaterialGroup;
};

const Material: FC<MaterialProps> = ({ material, category }) => {
    
  return (
    <>
      <div className={styles.material__wrapper}>
        <div className={`${styles.material}`}>
          <Image
            src={material.img}
            alt={""}
            width={50}
            height={50}
            priority
            unoptimized
            className={material.type?.includes('белый') ? `${styles.material__image} ${styles.white}` : `${styles.material__image}`}
          />
          {category.title === 'металл металлик' || category.title === 'кожа категория 2' || category.title === 'керамика' || category.title === 'нержавеющая сталь' ? <span className={`${styles.material__span} ${styles.metallic}`}>{material.name}</span> : <span className={styles.material__span}>{material.name}</span>}
        </div>
      </div>
    </>
  );
};

export default Material;
