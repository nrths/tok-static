import React, { FC } from "react";
import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";
import { TPublication } from "@/assets/publications";

export type PostProps = {
  post: TPublication;
  key?: number;
  homepage?: boolean;
};

const Post: FC<PostProps> = ({ post, homepage }) => {
  return (
    <div className={styles.listItem}>
      <Link href={post.content} target='_blank' className={styles.imageContainer}>
        <Image
          src={post.img}
          alt='Публикация в периодическом издании'
          width={homepage ? 290 : 130}
          height={homepage ? 290 : 130}
          priority
          className={styles.image}
        />
        <span className={styles.span}>{post.title}</span>
      </Link>
    </div>
  );
};

export default Post;
