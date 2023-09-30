import Header from "@/components/header/header";
import styles from "../../styles/smi.module.css";
import Post from "@/components/post/post";
import { Publications } from "@/assets/publications";
import Head from "next/head";

const SMIPage = () => {
  const feed = Publications;
  const sorted = feed.sort((a, b) => a.id - b.id);
  return (
    <>
      <Head>
        <title>Публикации | ТОК-Мебель</title>
        <meta
          name='description'
          content='Публикации в периодических изданиях с дизайнерской мебелью от фабрики ТОК'
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>публикации</h1>
        <ul className={styles.list}>
          {sorted.map((post) => (
            <li className={styles.item} key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SMIPage;
