import ReactDOM from "react-dom";
import styles from "./transparentPopup.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TPopup } from "@/types/types";

const TransparentPopup = ({ active, setActive, title, children }: TPopup) => {
  const [_document, setDocument] = useState<Document | null>(null);
//   const [closeButtonColor, setCloseButtonColor] = useState('')

  useEffect(() => {
    setDocument(document);
    active ? _document?.body.classList.add("modal") : _document?.body.classList.remove("modal")
  }, [_document?.body.classList, active]);

  useEffect(() => {
    setDocument(document);
    // const windowInnerWidth = window.innerWidth;
    // if (windowInnerWidth > 768) {
    //   setCloseButtonColor('/images/close.svg')
    // } else {
    //   setCloseButtonColor('/images/close__white.svg')
    // }
  }, []);

  useEffect(() => {
    const closeModalOnEsc = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setActive(false);
      }
    };

    window.addEventListener("keydown", closeModalOnEsc);
    return () => {
      window.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [setActive]);

  const handleClose = () => {
    setActive(false)
    _document?.body.classList.remove("modal")
  }

  const popupContent = (
    <>
      <div
        className={
          active ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`
        }
        onClick={() => handleClose()}
      >
        <div
          className={
            active
              ? `${styles.container} ${styles.active_content}`
              : `${styles.container} custom-scroll`
          }
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type='button'
            className={styles.button__close}
            onClick={() => handleClose()}
          >
            <Image
              src={'/images/close.svg'}
              alt='Закрыть'
              width={18}
              height={18}
            ></Image>
          </button>
          <h3 className={styles.title}>{title}</h3>
          <div
            className={styles.children}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
  if (_document) {
    const portalDiv = document.getElementById("modal-root")! as HTMLElement;
    return ReactDOM.createPortal(popupContent, portalDiv);
  } else return null;
};

export default TransparentPopup;
