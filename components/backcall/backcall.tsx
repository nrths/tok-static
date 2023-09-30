"use client";
import Image from "next/image";
import styles from "./backcall.module.css";
import Link from "next/link";
import Button from "../buttons/button";
import { useEffect, useState } from "react";
import Form from "../form/form";
import { useFormState } from "../form/formContext";
import SpbForm from "../form/spbForm";
import MoscowForm from "../form/moscowForm";
// import Success from "../form/success";

function ActiveStepFormComponent() {
  const { step, onHandleBack } = useFormState();
  switch (step) {
    case 1:
      return <><SpbForm /><MoscowForm /></>;
    case 2:
      return (<><Button type={"button"} onClick={onHandleBack} className={styles.backButton}>Назад</Button><Form id='backcall'/></>);
    // case 3:
    //   return <Success />;
    default:
      return null;
  }
}

const Backcall = () => {
  return (
    <>
    <div id="backcall">
      <ActiveStepFormComponent />
    </div>
    </>
  );
};

export default Backcall;
