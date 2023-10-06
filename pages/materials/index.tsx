import styles from "../../styles/materials.module.css";
import Header from "@/components/header/header";
import { MouseEvent, useState } from "react";
import MaterialInfo from "@/components/material__info/material__info";
import CenteredPopup from "@/components/popup/centredPopup";
import DropdownBlock from "@/components/dropdown__block/dropdown__block";
import MaterialGroup from "@/components/material__group/material__group";
import {
  Architectural_concrete,
  Ceramics,
  Enamel,
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
} from "@/assets/materials";
import { findCategory, findMaterial } from "@/lib/utils";
import AllFabricsBlock from "@/components/allFabrics__block/allFabrics__block";
import Head from "next/head";

const MaterialsPage = () => {
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
    <>
      <Head>
        <title>Материалы | ТОК-Мебель</title>
        <meta
          name='description'
          content='Материалы отделки дизайнерской мебели от ТОК-Мебель'
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>материалы</h1>
        <p className={styles.subtitle}>
          Выберите подходящий вариант отделки из&nbsp;стандартной палитры ТОК
        </p>
        <div className={styles.slidersWrapper}>
          <div className={styles.sliders}>
            <MaterialGroup category={HPL} handleClick={handleClick} />
            <MaterialGroup category={FenixNTM} handleClick={handleClick} />
            <MaterialGroup category={Ceramics} handleClick={handleClick} />
            <MaterialGroup category={Oak_tinting} handleClick={handleClick} />
          </div>
          <div className={styles.sliders}>
            <MaterialGroup category={Enamel} handleClick={handleClick} />
            <MaterialGroup category={Metal} handleClick={handleClick} />
            <MaterialGroup category={Metallic} handleClick={handleClick} />
            <MaterialGroup
              category={Architectural_concrete}
              handleClick={handleClick}
            />
          </div>
        </div>
        <DropdownBlock
          loading={false}
          title={"натуральная кожа"}
          className='full'
        >
          <div className={styles.wrapper_inside}>
            <MaterialGroup category={Leather_cat1} handleClick={handleClick} />
            <MaterialGroup category={Leather_cat2} handleClick={handleClick} />
          </div>
        </DropdownBlock>
        <DropdownBlock
          materials
          loading={false}
          title={"ткани"}
          className='full'
          id='fabrics'
        >
          <AllFabricsBlock handleClick={handleClick} fabrics={allFabrics} />
        </DropdownBlock>
        <span className={styles.caption}>
          * цвета образцов на&nbsp;вашем экране могут отличаться
          от&nbsp;оригинала
        </span>
      </div>
      <CenteredPopup active={popupActive} setActive={setPopupActive}>
        {clickedCategory && clickedMaterial && (
          <MaterialInfo material={clickedMaterial} category={clickedCategory} />
        )}
      </CenteredPopup>
    </>
  );
};

export default MaterialsPage;
