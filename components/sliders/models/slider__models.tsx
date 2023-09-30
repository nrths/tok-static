import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FC, useEffect, useState } from "react";
import Arrow from "@/components/arrow/arrow";
import Image from "next/image";
import styles from "../slider.module.css";
import { TProduct } from "@/assets/products";

export type TModelsSliderProps = {
  product: TProduct;
};

const ModelsSlider: FC<TModelsSliderProps> = ({ product }) => {
  const images = product.modelsSlider;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [controls, setControls] = useState(true);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { number: images.length, perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    product.title.startsWith("baikal") ? setControls(false) : setControls(true);
    product.title.includes("velvet-krug-razdvij")
      ? setControls(false)
      : setControls(true);
  }, [product.title]);

  return (
    <div className={styles.modelsSliderWrapper}>
      <div className='navigation-wrapper'>
        {images && <div ref={ref} className='keen-slider'>
          {images.map((src, idx) => (
            <div key={idx} className={`${styles.imageContainer}`}>
              <div className={`keen-slider__slide ${`number-slide${idx + 1}`}`}>
                <Image
                  fill
                  sizes='(min-width: 1400px) 80vw, (max-width: 1280px) 40vw, (max-width: 768px) 30vw, (max-width: 650px) 10w'
                  src={src}
                  unoptimized
                  alt={`${product.name}: в интерьере`}
                  priority
                  className={`${styles.imageProjects}`}
                  // placeholder="blur"
                  // blurDataURL={src}
                />
              </div>
            </div>
          ))}
        </div>}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={false}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={false}
            />
          </>
        )}

        {loaded && instanceRef.current && controls && (
          <div className={`dots dots__models ${styles.dots} ${styles.display}`}>
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
    </div>
  );
};

export default ModelsSlider;
