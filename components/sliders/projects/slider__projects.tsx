import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "@/components/arrow/arrow";
import styles from "../slider.module.css";
import { TProduct } from "@/assets/products";

export type TProjectSliderProps = {
  product: TProduct;
};

const ProjectSlider: FC<TProjectSliderProps> = ({ product }) => {
  const images = product.designersProjects.map((project) => project.img);
  const data = product.designersProjects;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [opacities, setOpacities] = useState<number[]>([]);
  const [perView, setPerView] = useState(2.5)
  const [initialSlide, setInitialSlide] = useState(1)
  const [controls, setControls] = useState(true);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {number: images.length, perView: perView, origin: "center"},
    initial: initialSlide,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (images.length <= 2 || windowInnerWidth <= 860) {
      setPerView(1)
      setInitialSlide(1)
    } else if (windowInnerWidth > 2100) {
      setPerView(3.5)
      setInitialSlide(3)
    }
  }, [images])
  
  return (
    <>
      <div className={styles.modelsSliderWrapper}>
        <div className='navigation-wrapper'>
          <div ref={sliderRef} className='keen-slider'> 
            {data.map((project, idx) => (
              <div
                key={idx}
                style={{ opacity: opacities[idx] }}
              >
                <div className={`${styles.imageContainer}  ${styles.projects}`}>
                  
                  <div className={`keen-slider__slide ${`number-slide${idx + 1}`} ${styles.slidesWithSpan}`}>
                      <Image
                    fill
                    sizes='(min-width: 1400px) 100vw, (max-width: 1280px) 40vw, (max-width: 768px) 30vw, (max-width: 650px) 10w'
                    src={project.img}
                    alt={`${product.name}: проекты дизайнеров`}
                    priority
                    className={`${
                      styles.imageProjects
                    }`}
                    unoptimized
                  />
                  <div className={styles.underline}>
                  {project.author && (
                    <span className={styles.name}>
                      автор проекта: {project.author}
                    </span>
                  )}
                  {project.artist && (
                    <span className={styles.name}>
                      визуализатор: {project.artist}
                    </span>
                  )}
                  {project.photographer && (
                    <span className={styles.name}>
                      фото: {project.photographer}
                    </span>
                  )}
                  </div>
                </div>
                </div>
                
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && controls && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={currentSlide ===
                  instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
