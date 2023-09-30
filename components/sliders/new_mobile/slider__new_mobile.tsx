import React, { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { TNewModel } from "@/lib/lists";
import styles from "../slider.module.css";

export type TNewModelsSliderProps = {
  models: TNewModel[];
};
const NewModelsSliderMobile: FC<TNewModelsSliderProps> = ({ models }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: 'snap',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { origin: "center" },
  });

  return (
    <div className={styles.modelsSliderWrapper}>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className={`keen-slider__slide number-slide1 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[0].img}
              alt={models[0].name}
              priority
              style={{ objectFit: "contain" }}
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[0].name}</h1>
                <span className={styles.description}>
                  {models[0].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide2 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[1].img}
              alt={models[1].name}
              priority
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[1].name}</h1>
                <span className={styles.description}>
                  {models[1].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide3 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[2].img}
              alt={models[2].name}
              priority
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[2].name}</h1>
                <span className={styles.description}>
                  {models[2].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide4 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[3].img}
              alt={models[3].name}
              priority
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[3].name}</h1>
                <span className={styles.description}>
                  {models[3].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide5 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[4].img}
              alt={models[4].name}
              priority
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[4].name}</h1>
                <span className={styles.description}>
                  {models[4].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide6 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[5].img}
              alt={models[5].name}
              priority
              className={styles.imageHomepage}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[5].name}</h1>
                <span className={styles.description}>
                  {models[5].description}
                </span>
              </div>
            </div>
          </div>
          <div className={`keen-slider__slide number-slide7 `}>
            <Image
              fill
              sizes='(max-width: 2560px) 100vw'
              src={models[6].img}
              alt={models[6].name}
              priority
              className={styles.image}
            />
            <div className={styles.patch}>
              <div className={styles.patch__content}>
                <h1 className={styles.title}>{models[6].name}</h1>
                <span className={styles.description}>
                  {models[6].description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModelsSliderMobile;
