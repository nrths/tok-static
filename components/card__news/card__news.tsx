import { FC, useState } from "react";
import styles from "./card__news.module.css";
import { TNewsItem } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

type TNewsCardProps = {
  item: TNewsItem;
  key?: number;
};

const NewsCard: FC<TNewsCardProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <h3>
        {item.upper ? <p className={styles.upper}>{item.upper}</p> : null}
        {"\n"}
        <p className={styles.title}>{item.title}</p>
      </h3>
      <Image
        className={styles.image}
        src={item.img}
        alt=''
        width={item.img.includes("raffle") ? 222 : 194}
        height={item.img.includes("raffle") ? 280 : 55}
        unoptimized={item.img.includes("raffle") ? true : false}
      />
      <p className={styles.description}>{item.description}</p>
      <div className={styles.down}>
        <p className={styles.accents}>{item.accent}</p>
        <Link
          className={styles.link}
          href={item.redirection}
          replace
          target='_blank'
        >
          подробнее
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
