import { useRouter } from "next/router";
import styles from "./youtubePlayer.module.css";

export default function YouTubePlayer({ id }: { id: string }) {
  const router = useRouter();
  return (
    <div
      className={
        router.pathname === "/about"
          ? `${styles.videoWrapper} ${styles.videoWrapperAbout}`
          : `${styles.videoWrapper}`
      }
    >
      <iframe
        className={`${styles.youtubePlayer} aspect-video w-full h-full`}
        src={"https://www.youtube.com/embed/" + id}
        title='YouTube Video Player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        width={"100%"}
        height={"100%"}
      ></iframe>
    </div>
  );
}
