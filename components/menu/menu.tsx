import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";
import { menuProductsList, footerInfoList } from "@/lib/lists";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list__icons}>
          {menuProductsList.map((item) => (
            // @ts-ignore
            <li key={item.name} className={styles.iconWrapper} disabled={router.pathname === item.link}>
              <Link href={item.link} className={styles.icon} >
                <Image
                  src={item.img!}
                  alt={item.name!}
                  width={46}
                  height={46}
                  className={styles.icon__image}
                />
                <span className={styles.caption}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.list__strings}>
          {footerInfoList.map((product) => (
            <Link href={product.link} className={styles.link} key={product.name}>
              {/* @ts-ignore */}
              <li className={styles.item} disabled={router.pathname === product.link}>
                {product.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
