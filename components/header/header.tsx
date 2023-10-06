'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import NavButton from "../buttons/button__nav";
import Popup from "../popup/popup";
import { useState } from "react";
import Menu from "../menu/menu";
import Backcall from "../backcall/backcall";
import { useFormState } from "../form/formContext";
import { pointYandexGoal } from "@/lib/utils";

const Header = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedButton, setClickedButton] = useState('');
  const { setFormData, setStep } = useFormState();

  const handleClick = (e: any) => {
    const name = e.currentTarget.name
    setPopupActive(true)
    setClickedButton(name)
    if (name === 'backCall') {
      setFormData(undefined)
      setStep(1)
      pointYandexGoal('открыли окно обратного звонка')
    }
  }

  return (
    <>
      <header className={styles.container}>
        <Link href={"/"}>
          <Image
            className={styles.logo}
            src={"/logo_full.svg"}
            alt='Логотип'
            width={92}
            height={42}
            priority
          />
        </Link>
        <div className={styles.navigation}>
          <NavButton name='backCall' onClick={(e) => handleClick(e)} />
          <NavButton name='burger' onClick={(e) => handleClick(e)} />
          <Popup active={popupActive} setActive={setPopupActive}>
            {clickedButton === 'burger' ? <Menu /> : null}
            {clickedButton === 'backCall' ? <Backcall /> : null} 
          </Popup>
        </div>
      </header>
    </>
  );
}

export default Header;
