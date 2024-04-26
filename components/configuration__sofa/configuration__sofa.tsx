import { MouseEvent, useState } from "react";
import Button from "../buttons/button";
import styles from "./configuration__sofa.module.css";
import Image from "next/image";
import CenteredPopup from "../popup/centredPopup";
import TransparentPopup from "../popup/transparentPopup";
import FormSofas from "../form/formSofas";

const ConfigurationSofa = () => {
  const [popupActive, setPopupActive] = useState(false);
  const src = "/images/other/sofa_form.jpg";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPopupActive(true);
  };
  return (
    <div className={styles.container}>
      <Image
        fill
        sizes='(max-width: 2560px) 100vw'
        src={src}
        alt=''
        priority
        unoptimized
        className={styles.image}
      />
      <div className={styles.patch}>
        <div className={styles.patch__content}>
          <h1 className={styles.title}>
            создайте свою
            <br />
            уникальную конфигурацию
          </h1>
          <Button
            type={"button"}
            onClick={(e) => handleClick(e)}
            className={styles.button}
          >
            связаться с менеджером
          </Button>
        </div>
      </div>
      <TransparentPopup
        active={popupActive}
        setActive={setPopupActive}
      >
        <FormSofas id={'config'}/>
      </TransparentPopup>
    </div>
  );
};

export default ConfigurationSofa;
