import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FC, useEffect, useState } from "react";
import Arrow from "@/components/arrow/arrow";
import SeriesCard from "@/components/card/card__series";
import Card from "@/components/card/card";

type TvisualsSliderProps = {
  visuals: any;
};

const NewVisualsSlider: FC<TvisualsSliderProps> = ({ visuals }) => {
  const images = visuals.map((vis: { previewImg: string }) => vis.previewImg);
  const [perView, setPerView] = useState(2);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth <= 600) {
      const perView = 2;
      setPerView(perView);
    } else {
      const perView = 3;
      setPerView(perView);
    }
  }, []);

  return (
    <div className='navigation-wrapper'>
      <div ref={ref} className='keen-slider new-models-homepage'>
        {visuals.map((item: any, idx: number) => {
          if (item.title.startsWith("ser")) {
            return (
              <div
                className={`keen-slider__slide ${`number-slide${idx + 1}`}`}
                key={idx}
              >
                <SeriesCard
                  series={item}
                  key={item.id}
                  id='homepage'
                  homepage
                />
              </div>
            );
          } else {
            return (
              <div
                className={`keen-slider__slide ${`number-slide${idx + 1}`}`}
                key={idx}
              >
                {/* @ts-ignore */}
                <Card
                  product={item}
                  key={item.id + 100}
                  id='homepage'
                  homepage
                />
              </div>
            );
          }
        })}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            smallArrows
          />
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === 4}
            smallArrows
          />
        </>
      )}
    </div>
  );
};

export default NewVisualsSlider;
