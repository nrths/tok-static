// import React from 'react';
// import YouTube from 'react-youtube';

// const YouTubePlayer = ({ videoId }: any) => {
//     // Set up event handlers
//     const onReady = (event: { target: any; }) => {
//       // Access the player instance
//       const player = event.target;

//       // For example, you can automatically play the video
//       player.playVideo();
//     };

//     const onError = (error: any) => {
//       console.error('YouTube Player Error:', error);
//     };

//     return (
//       <YouTube
//         videoId={videoId}
//         onReady={onReady}
//         onError={onError}
//       />
//     );
//   };

//   export default YouTubePlayer;
import styles from "./youtubePlayer.module.css";

export default function YouTubePlayer({ id }: { id: string }) {
  return (
    <div className={styles.videoWrapper}>
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
