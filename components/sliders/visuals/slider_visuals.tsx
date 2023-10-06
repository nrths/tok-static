import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../slider.module.css";
import ArrowWhite from "@/components/arrow/arrow__white";
import { TProduct } from "@/assets/products";

export type TVisualsSliderProps = {
  product: TProduct;
};

const VisualSlider: FC<TVisualsSliderProps> = ({ product }) => {
  const images = product.visualisations;
  const [perView, setPerView] = useState(2);
  const [controls, setControls] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { number: images.length, perView: perView },
    mode: 'free-snap',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;
    if (product.visualisations.length === 2) {
      const perView = 2;
      setPerView(perView);
    } else if (product.visualisations.length >= 3) {
      if (windowInnerWidth <= 860) {
        const perView = 1;
        setPerView(perView);
      } else if (windowInnerWidth >= 861 && windowInnerWidth <= 1600) {
        const perView = 2;
        setPerView(perView);
      } else {
        const perView = 3;
        setPerView(perView);
      }
    } else {
      const perView = 1;
      setPerView(perView);
    }

    perView === product.visualisations.length ? setControls(false) : setControls(true);
  }, [perView, product.visualisations.length]);

  return (
    <div className='navigation-wrapper'>
      <div ref={ref} className='keen-slider'>
        {images.map((src, idx) => (
          <div key={idx} className={`${styles.imageContainer}`}>
            <Image
              fill
              sizes='(min-width: 1400px) 80vw, (max-width: 1280px) 40vw, (max-width: 768px) 30vw, (max-width: 650px) 10w'
              src={src}
              alt={`${product.name}: в интерьере`}
              priority
              unoptimized
              className={`keen-slider__slide ${`number-slide${idx + 1}`} ${
                styles.imageSizes
              } ${perView !== 1 ? `${styles.visuals}` : ''}`}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && controls && (
        <>
          <div
            className={`${styles.arrowWrapper} ${styles.left}`}
            onClick={(e) => instanceRef.current?.prev()}
          >
            <div className={styles.arrow}>
              <ArrowWhite
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className={styles.whiteArrow}
              />
            </div>
          </div>
          <div
            className={`${styles.arrowWrapper} ${styles.right}`}
            onClick={(e) => instanceRef.current?.next()}
          >
            <div className={styles.arrow}>
              <ArrowWhite
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          </div>
        </>
      )}
      {loaded && instanceRef.current && controls && images.length > 3 && (
        <div className='dots dots__visuals'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VisualSlider;
