"use client";
import styles from "./backcall.module.css";
import Button from "../buttons/button";
import Form from "../form/form";
import { useFormState } from "../form/formContext";
import SpbForm from "../form/spbForm";
import MoscowForm from "../form/moscowForm";

function ActiveStepFormComponent() {
  const { step, onHandleBack } = useFormState();
  switch (step) {
    case 1:
      return <><SpbForm /><MoscowForm /></>;
    case 2:
      return (<><Button type={"button"} onClick={onHandleBack} className={styles.backButton}>Назад</Button><Form id='backcall'/></>);
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
