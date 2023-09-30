import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "@/components/arrow/arrow";
import styles from "../slider.module.css";
import { TProduct } from "@/assets/products";

export type TSizesSliderProps = {
  product: TProduct;
};

const SizesSlider: FC<TSizesSliderProps> = ({ product }) => {
  const images = product.sizesSlider;
  const [perView, setPerView] = useState(product.sizesSlider.length > 1 ? 2 : 1)
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [controls, setControls] = useState(true);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { number: images.length, perView: perView },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 769) {
      setPerView(1);
    } else {
     setPerView(product.sizesSlider.length > 1 ? 2 : 1)
    }
    perView === product.sizesSlider.length
      ? setControls(false)
      : setControls(true);
  }, [perView, product.sizesSlider.length]);

  return (
    <div className='navigation-wrapper sizes'>
      <div ref={ref} className='keen-slider'>
        {images.map((src, idx) => (
          <div key={idx} className={styles.imageContainer}>
            <Image
              fill
              sizes='(min-width: 1400px) 80vw, (max-width: 1280px) 40vw, (max-width: 768px) 30vw, (max-width: 650px) 10w'
              src={src}
              alt={`${product.name}: размеры`}
              priority
              unoptimized
              className={`keen-slider__slide ${`number-slide${idx + 1}`} ${
                styles.imageSizes
              }`}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && controls && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
};

export default SizesSlider;
