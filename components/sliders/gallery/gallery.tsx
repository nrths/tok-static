import styles from "../slider.module.css";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FC, useEffect, useState } from "react";
import Arrow from "@/components/arrow/arrow";
import { TListItem } from "@/lib/lists";
import Link from "next/link";

const Gallery: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
//   const [perView, setPerView] = useState(2);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView: 3 },
  });

  return (
    <>
      <div className={styles.galleryWrapper}>
        <div className='navigation-wrapper'>
          <div ref={sliderRef} className='keen-slider'>
            <div className={`keen-slider__slide number-slide1 ${styles.imageContainer}`}>
              <Image
                fill
                priority
                className={`${styles.imageProjects} ${styles.border}`}
                unoptimized
                src={"/images/other/about2.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide2 ${styles.imageContainer}`}>
              <Image
                fill
                priority
                className={`${styles.imageProjects} ${styles.border}`}
                unoptimized
                src={"/images/other/about3.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide3 ${styles.imageContainer}`}>
              <Image
                fill
                priority
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about4.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide4 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about5.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide5 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about6.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide6 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about7.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide7 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about8.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide8 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about9.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide9 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about10.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide10 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about11.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide11 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about12.jpg"}
                alt=''
              />
            </div>
            <div className={`keen-slider__slide number-slide12 ${styles.imageContainer}`}>
              <Image
                fill
                className={styles.imageProjects}
                unoptimized
                src={"/images/other/about13.jpg"}
                alt=''
              />
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
