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

const MaterialsWidget: FC<MaterialsWidgetProps> = ({ item }) => {
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
          <h4 className={styles.heading}>
            {item.category.includes("TABLE") ? "отделка столешницы" : "отделка"}
          </h4>
          {item.countertop?.map((mat, i) => {
            if (mat.includes("fenix ntm")) {
              if (mat === "fenix ntm / массив дуба") {
                return (
                  <>
                    <MaterialGroup
                      category={FenixNTM}
                      handleClick={handleClick}
                      key={Math.random() + 100}
                    />
                    <MaterialGroup
                      category={Oak_tinting}
                      handleClick={handleClick}
                      key={Math.random() + 200}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <MaterialGroup
                      category={FenixNTM}
                      handleClick={handleClick}
                      key={Math.random() + 300}
                    />
                    <MaterialGroup
                      category={HPL}
                      handleClick={handleClick}
                      key={Math.random() + 400}
                    />
                  </>
                );
              }
            } else if (mat.includes("дуба")) {
              return (
                <>
                  <MaterialGroup
                    category={Oak_tinting}
                    handleClick={handleClick}
                    key={Math.random() + 500}
                  />
                  <MaterialGroup
                    category={EnamelWithOakTexture}
                    handleClick={handleClick}
                    key={Math.random() + 550}
                  />
                </>
              );
            } else if (mat.includes("эмаль")) {
              return (
                <>
                  <MaterialGroup
                    category={Enamel}
                    handleClick={handleClick}
                    key={Math.random() + 600}
                  />
                </>
              );
            } else {
              return (
                <MaterialGroup
                  category={allMaterials.find((m) => m.title === mat)}
                  handleClick={handleClick}
                  key={Math.random() + 700}
                />
              );
            }
          })}
          {item.category === "BED" && (
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
          {item.category === "CHAIR" && (
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
        {item.category !== "BED" && (
          <div className={styles.underframe}>
            <h4 className={styles.heading}>
              {item.category === "CHAIR"
                ? "отделка основания"
                : "отделка подстолья"}
            </h4>
            {item.underframe?.map((mat, i) => {
              if (mat.includes("металл")) {
                return (
                  <>
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
                  </>
                );
              } else if (mat.includes("дуб")) {
                if (mat.includes("бетон")) {
                  return (
                    <>
                      <MaterialGroup
                        category={Architectural_concrete}
                        handleClick={handleClick}
                        key={Math.random() + 1000}
                      />
                      <MaterialGroup
                        category={Oak_tinting}
                        handleClick={handleClick}
                        key={Math.random() + 1100}
                      />
                    </>
                  );
                } else
                  return (
                    <>
                      <MaterialGroup
                        category={Oak_tinting}
                        handleClick={handleClick}
                        key={Math.random() + 1200}
                      />
                      <MaterialGroup
                        category={EnamelWithOakTexture}
                        handleClick={handleClick}
                        key={Math.random() + 11200}
                      />
                    </>
                  );
              } else if (mat.includes("кожа")) {
                if (mat.includes("керамика")) {
                  return (
                    <>
                      <MaterialGroup
                        category={Ceramics}
                        handleClick={handleClick}
                        key={Math.random() + 1300}
                      />
                      <MaterialGroup
                        category={Leather_cat1}
                        handleClick={handleClick}
                        key={Math.random() + 1400}
                      />
                      <MaterialGroup
                        category={Leather_cat2}
                        handleClick={handleClick}
                        key={Math.random() + 1500}
                      />
                    </>
                  );
                } else
                  return (
                    <>
                      <MaterialGroup
                        category={Leather_cat1}
                        handleClick={handleClick}
                        key={Math.random() + 1600}
                      />
                      <MaterialGroup
                        category={Leather_cat2}
                        handleClick={handleClick}
                        key={Math.random() + 1700}
                      />
                    </>
                  );
              } else if (mat.includes("бетон")) {
                return (
                  <>
                    <MaterialGroup
                      category={Architectural_concrete}
                      handleClick={handleClick}
                      key={Math.random() + 1800}
                    />
                  </>
                );
              } else if (mat.includes("эмаль")) {
                return (
                  <>
                    <MaterialGroup
                      category={Enamel}
                      handleClick={handleClick}
                      key={Math.random() + 1900}
                    />
                  </>
                );
              }
            })}
          </div>
        )}
      </div>
      <div className={styles.materialsContainer}>
        {item.category.includes("TABLE") && (
          <div className={styles.hem}>
            <h4 className={styles.heading}>отделка кромки</h4>
            {item.category.includes("OAK") ? (
              <MaterialGroup
                category={EnamelWithOakTexture}
                handleClick={handleClick}
                key={Math.random() + 20000}
              />
            ) : (
              <MaterialGroup
                category={Enamel}
                handleClick={handleClick}
                key={Math.random() + 2000}
              />
            )}
          </div>
        )}
        {item.title === 'baul' || item.title === 'slaider' || item.title === 'slot' ? (
          <div className={styles.base}>
            <h4 className={styles.heading}>отделка стальной рамы</h4>
            <MaterialGroup
              category={Metal}
              handleClick={handleClick}
              key={Math.random() + 2100}
            />
            <MaterialGroup
              category={Metallic}
              handleClick={handleClick}
              key={Math.random() + 22100}
            />
          </div>
        ) : null}
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

export default MaterialsWidget;
