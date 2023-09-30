import Image from "next/image";
import styles from './button.module.css';
import { MouseEventHandler, useState } from "react";

type TNavButton = {
  name: "filter" | "backCall" | "burger";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const NavButton = (props: TNavButton) => {
  let imgSrc,
    imgAlt: string = "";

  switch (props.name) {
    case "filter":
      imgSrc = "/images/filter.svg";
      imgAlt = "Кнопка фильтра по продукции";
      break;
    case "backCall":
      imgSrc = "/images/backCall.svg";
      imgAlt = "Кнопка обратного звонка";
      break;
    case "burger":
      imgSrc = "/images/burger.svg";
      imgAlt = "Кнопка вызова меню";
      break;
    default:
      console.log("Unknown NavButton type");
  }

  return (
    <>
      <button type='button' name={props.name} onClick={props.onClick} disabled={props.disabled} className={styles.nav__button}>
        <Image
          src={`${imgSrc}`}
          alt={`${imgAlt}`}
          width={28}
          height={28}
          priority
        ></Image>
      </button>
    </>
  );
};

export default NavButton;
