import Header from "@/components/header/header";
import styles from "../../styles/404.module.css";
import Head from "next/head";
import Button from "@/components/buttons/button";
import { useRouter } from "next/router";

const SalePage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Дисконт | ТОК-Мебель</title>
        <meta
          name='description'
          content='Модели со скидкой от фабрики дизайнерской мебели ТОК'
        />
      </Head>
      <Header />
      <div className={styles.custom404}>
      <h1 className={styles.title}>Ой!</h1>
        <p className={styles.text}>
          На странице ведутся технические работы, она появится позже.
        </p>
      </div>
      <div className={styles.wrapper}>
        <Button type={"button"} onClick={() => router.back()} className={styles.button}>
          назад
        </Button>
        <Button type={"button"} onClick={() => router.push("/")} className={styles.button}>
          на главную
        </Button>
        </div>
    </>
  );
};

export default SalePage;
