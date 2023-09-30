"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import {
  footerProductsList,
  footerInfoList,
  footerSocialsList,
} from "@/lib/lists";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const router = useRouter()
  const [caption, setCaption] = useState(false)

  useEffect(() => {
    if (router.pathname === '/' || router.pathname.includes('/products') || router.pathname === '/about' ) {
      setCaption(true)
    } else {
      setCaption(false)
    }
  }, [router.pathname])
  return (
    <>
      <footer className={styles.footer}>
        {caption && <span className={styles.captionUp}>
          придумано и<br />
          сделано в&nbsp;россии
        </span>}
        <div className={styles.container}>
          <div className={`${styles.column} ${styles.products}`}>
            <h3 className={styles.header}>продукция</h3>
            <ul className={styles.list}>
              {footerProductsList.map((product) => (
                <li className={styles.item} key={product.name}>
                  <Link href={product.link}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.column} ${styles.info}`}>
            <h3 className={styles.header}>информация</h3>
            <ul className={styles.list}>
              {footerInfoList.map((product) => (
                <li className={styles.item} key={product.name}>
                  <Link href={product.link}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.column} ${styles.socials}`}>
            <h3 className={styles.header}>соцсети</h3>
            <ul className={styles.list__type_socials}>
              {footerSocialsList.map((item) => (
                <li className={styles.icon} key={item.name}>
                  <Link href={item.link} target="_blank">
                    <Image
                      src={item.img!}
                      alt={
                        item.name ? `${item.name}` : "Ссылка на социальную сеть"
                      }
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <span className={styles.caption}>
              придумано и<br />сделано в&nbsp;россии
            </span>
          </div>
        </div>
        <div className={styles.underline__wrapper}>
          <span className={styles.underline}>
            &copy; Все права защищены 2018-2023
          </span>
          <span className={styles.underline}>Мебельная фабрика ТОК</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
