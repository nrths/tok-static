import styles from "../styles/404.module.css";
import Button from "@/components/buttons/button";
import Header from "@/components/header/header";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className={styles.custom404}>
        <h1 className={styles.title}>Мы обновили сайт</h1>
      </div>
      <div className={styles.wrapper}>
        <Button type={"button"} onClick={() => router.push("/products")} className={styles.button}>
          продукция
        </Button>
        <Button type={"button"} onClick={() => router.push("/")} className={styles.button}>
          на главную
        </Button>
      </div>
    </>
  );
};

export default Custom404;
