import { FC } from "react";
import styles from "./place.module.css";
import Image from "next/image";

type TPlaceProps = {
  title: string;
  city: string;
  contacts?: boolean;
  mobile?: boolean;
};

const Place: FC<TPlaceProps> = ({ title, city, contacts, mobile }) => {
  let src = "";

  switch (title) {
    case "artplay":
      if (contacts || mobile) {
        src = "/images/places/artplay.jpg"
      } else {
        src = "/images/places/artplay_full.jpg";
      }
      break;
    case "design district":
      if (contacts || mobile) {
        src = "/images/places/daa.jpg";
      } else {
        src = "/images/places/daa_full.jpg"
      }
      break;
    default:
      console.log("Place Err");
  }

  return (
    <div className={contacts ? `${styles.container} ${styles.containerContacts}` : `${styles.container}`}>
      {contacts ? null : <h2 className={styles.title}>{title}</h2>}
      {contacts ? null : <p className={styles.city}>{city}</p>}
      <Image className={contacts ? `${styles.contactImg}` : `${styles.img}`} src={src} alt={title} fill unoptimized />
    </div>
  );
};

export default Place;
