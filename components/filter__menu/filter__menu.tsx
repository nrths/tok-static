import Link from "next/link";
import styles from "./filter__menu.module.css";
import { useRouter } from "next/router";
import { FC } from "react";

type MenuItemProps = {
  disable: boolean;
  href: string;
  title: string;
};

const MenuItem: FC<MenuItemProps> = ({ disable, href, title }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className={
        pathname === href
          ? `${styles.menuItem} ${styles.active}`
          : `${styles.menuItem}`
      }
      // @ts-ignore
      disabled={disable}
    >
      {title}
    </div>
  );
};

const FilterMenu = () => {
  const router = useRouter();
  const { pathname } = router;

  const hrefAll = "/products";
  const hrefTables = "/products/tables";
  const hrefCoffeeTables = "/products/coffee-tables";
  const hrefBeds = "/products/beds";
  const hrefChairs = "/products/chairs";

  return (
    <div className={styles.container}>
      <div className={styles.menuList}>
        <Link href={hrefAll}>
          <MenuItem
            disable={pathname === hrefAll}
            href={hrefAll}
            title={"все"}
          />
        </Link>
        <Link
          href={hrefTables}
          onClick={
            pathname === hrefTables
              ? () => router.reload()
              : () => router.push("/products/tables")
          }
        >
          <MenuItem
            disable={pathname === hrefTables}
            href={hrefTables}
            title={"столы"}
          />
        </Link>
        <Link href={hrefCoffeeTables}>
          <MenuItem
            disable={pathname === hrefCoffeeTables}
            href={hrefCoffeeTables}
            title={"столики"}
          />
        </Link>
        <Link href={hrefBeds}>
          <MenuItem
            disable={pathname === hrefBeds}
            href={hrefBeds}
            title={"кровати"}
          />
        </Link>
        <Link href={hrefChairs}>
          <MenuItem
            disable={pathname === hrefChairs}
            href={hrefChairs}
            title={"стулья"}
          />
        </Link>
      </div>
    </div>
  );
};

export default FilterMenu;
