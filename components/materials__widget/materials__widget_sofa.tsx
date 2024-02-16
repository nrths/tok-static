import { FC, useState, MouseEvent } from "react";
import styles from "./materials__widget.module.css";
import { TProduct } from "@/assets/products";
import MaterialGroup from "../material__group/material__group";
import {
  Architectural_concrete,
  Ceramics,
  Enamel,
  EnamelWithOakTexture,
  FenixNTM,
  HPL,
  Leather_cat1,
  Leather_cat2,
  Metal,
  Metallic,
  Oak_tinting,
  Steal,
  TMaterial,
  TMaterialGroup,
  allFabrics,
  allMaterials,
} from "@/assets/materials";
import { findCategory, findMaterial } from "@/lib/utils";
import CenteredPopup from "../popup/centredPopup";
import MaterialInfo from "../material__info/material__info";
import DropdownBlock from "../dropdown__block/dropdown__block";
import Button from "../buttons/button";
import { useRouter } from "next/router";
import Link from "next/link";

export type MaterialsWidgetProps = {
  item: TProduct;
};

const SofaMaterialsWidget: FC<MaterialsWidgetProps> = ({ item }) => {
  const router = useRouter();
  const [popupActive, setPopupActive] = useState(false);
  const [clickedMaterial, setClickedMaterial] = useState<TMaterial | null>();
  const [clickedCategory, setClickedCategory] = useState<
    TMaterialGroup | undefined
  >();

  const handleClick = async (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    name: string,
    category: TMaterialGroup,
    type: string
  ) => {
    e.stopPropagation();
    setPopupActive(true);
    const currentCategory = findCategory(category);
    setClickedCategory(currentCategory);
    const currentMaterial = findMaterial(currentCategory, name, type);
    setClickedMaterial(currentMaterial);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.materialsContainer}>
        <div className={styles.countertop}>
          <h4 className={styles.heading}>отделка</h4>

          {item.countertop !== undefined &&
            item.countertop.map((mat, i) => {
              return (
                <MaterialGroup
                  category={allMaterials.find((m) => m.title === mat)}
                  handleClick={handleClick}
                  key={Math.random() + 700}
                />
              );
            })}
          <MaterialGroup
            category={Ceramics}
            handleClick={handleClick}
            key={Math.random()}
          />
          {item.category.includes("SOFA") && (
            <Link href={"/materials#fabrics"} scroll={false}>
              <Button
                type={"button"}
                onClick={undefined}
                className={styles.fabrics}
              >
                посмотреть все ткани
              </Button>
            </Link>
          )}
        </div>
        <div className={styles.hem}>
          <h4 className={styles.heading}>отделка подноса</h4>
          <MaterialGroup
            category={Oak_tinting}
            handleClick={handleClick}
            key={Math.random() + 120000}
          />
          <MaterialGroup
            category={EnamelWithOakTexture}
            handleClick={handleClick}
            key={Math.random() + 20000}
          />
        </div>
      </div>
      <div className={styles.materialsContainer}>
        <div className={styles.underframe}>
          <h4 className={styles.heading}>отделка ножек</h4>
          <MaterialGroup
            category={Metal}
            handleClick={handleClick}
            key={Math.random() + 800}
          />
          <MaterialGroup
            category={Metallic}
            handleClick={handleClick}
            key={Math.random() + 900}
          />
        </div>
      </div>
      <span className={styles.caption}>
        * цвета образцов
        <br />
        на&nbsp;вашем экране могут отличаться от&nbsp;оригинала
      </span>
      <CenteredPopup active={popupActive} setActive={setPopupActive}>
        {clickedCategory && clickedMaterial && (
          <MaterialInfo
            material={clickedMaterial}
            category={clickedCategory}
            key={Math.random() + 2200}
          />
        )}
      </CenteredPopup>
    </div>
  );
};

export default SofaMaterialsWidget;
