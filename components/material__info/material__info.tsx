import { FC, useEffect, useState } from "react";
import Material from "../material/material";
import styles from "./material__info.module.css";
import Image from "next/image";
import { TMaterial, TMaterialGroup } from "@/assets/materials";

export type MaterialsInfoProps = {
  material: TMaterial;
  category: TMaterialGroup;
};

const MaterialInfo: FC<MaterialsInfoProps> = ({ material, category }) => {
  const [activeCategory, setActiveCategory] = useState<TMaterial[] | null>(
    null
  );
  const [activeMaterial, setActiveMaterial] = useState<TMaterial | null>(null);

  useEffect(() => {
    setActiveMaterial(material);
  }, [material]);

  useEffect(() => {
    setActiveCategory(category.materials);
  }, [category.materials, category.title, material.type]);

  const handleClick = (e: any, material: TMaterial) => {
    e.stopPropagation();
    setActiveMaterial(material);
  };
  // console.log(activeCategory);
  return (
    <div className={`${styles.container}`}>
      {activeMaterial && (
        <div className={styles.column}>
          <Image
            className={styles.image}
            src={activeMaterial.img}
            alt={activeMaterial.name}
            fill
            sizes='(max-height: 768px) 30%, (max-width: 1200px) 100%'
            style={{ objectFit: "cover" }}
          />
          <span className={styles.span}>
            {activeMaterial.type} {activeMaterial.name}
          </span>
        </div>
      )}
      <div className={styles.column}>
        <h1 className={styles.title}>
          {category.title} {category.title.includes("ткань") && material.type}
        </h1>
        <div className={styles.materials}>
          {activeCategory &&
            activeCategory.map((material: TMaterial) => (
              <div key={material.id} onClick={(e) => handleClick(e, material)}>
                <Material
                  key={material.id}
                  material={material}
                  category={category}
                />
              </div>
            ))}
        </div>
        <div className={styles.description}>
          <h2 className={styles.heading}>описание:</h2>
          <p className={styles.text}>
            {/* <span className={`${styles.text__lined}`}>
            </span> */}
            {category.description}
          </p>
        </div>
        <div className={styles.info}>
          {category.furnish && (
            <h2 className={styles.heading}>отделка: {category.furnish}</h2>
          )}
          {category.base && (
            <h2 className={styles.heading}>основа: {category.base}</h2>
          )}
          {category.hem && (
            <h2 className={styles.heading}>кромка: {category.hem}</h2>
          )}
          <h2 className={styles.heading}>
            производство: {category.manufacturer}
          </h2>
        </div>
        <span className={styles.caption}>
          * цвета образцов на&nbsp;вашем экране могут отличаться
          от&nbsp;оригинала
        </span>
      </div>
    </div>
  );
};

export default MaterialInfo;
