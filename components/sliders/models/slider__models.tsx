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
  const [controls, setControls] = useState(true);
  const [loaded, setLoaded] = useState(false);
  
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
    product.title.startsWith('baikal') ? setControls(false) : setControls(true)
    product.title.includes('velvet-krug-razdvij') ? setControls(false) : setControls(true)
  }, [images, product])

  return (
    <div className='navigation-wrapper'>
      <div ref={ref} className='keen-slider'>
        {images.map((src, idx) => (
          <div key={idx} className={`${styles.imageContainer}`}>
            <Image
              fill
              // sizes='(min-width: 1400px) 80vw, (max-width: 1280px) 40vw, (max-width: 768px) 30vw, (max-width: 650px) 10w'
              src={src}
              alt={`${product.name}: в интерьере`}
              priority
              className={`keen-slider__slide ${`number-slide${idx + 1}`} ${
                styles.imageSizes
              } ${styles.visuals}`}
              // placeholder="blur"
              // blurDataURL={src}
              unoptimized
              
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={false}
          />
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
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
  );
};

export default ModelsSlider;
