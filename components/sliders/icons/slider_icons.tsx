import styles from "../slider.module.css";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FC, useState } from "react";
import Arrow from "@/components/arrow/arrow";
import { TListItem } from "@/lib/lists";
import Link from "next/link";

type TIconsSliderProps = {
  icons: TListItem[];
};

const IconsSlider: FC<TIconsSliderProps> = ({ icons }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
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
    slides: { perView: 5 },
  });

  return (
    <>
      <div className={styles.iconsSliderWrapper}>
        <div className='navigation-wrapper'>
          <div ref={sliderRef} className='keen-slider'>
            <div
              className='keen-slider__slide number-slide1'
            >
              <Link href={icons[0].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[0].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[0].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide2'>
              <Link href={icons[1].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[1].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[1].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide3'>
              <Link href={icons[2].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[2].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[2].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide4'>
              <Link href={icons[3].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[3].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[3].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide5'>
              <Link href={icons[4].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[4].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[4].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide6'>
              <Link href={icons[5].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[5].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[5].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide7'>
              <Link href={icons[6].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[6].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[6].name}</span>
              </Link>
            </div>
            <div className='keen-slider__slide number-slide8'>
              <Link href={icons[7].link} className={styles.link}>
                <Image
                  width={46}
                  height={46}
                  className={styles.icon}
                  src={icons[7].img!}
                  alt=''
                />
                <span className={styles.caption}>{icons[7].name}</span>
              </Link>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                iconsSlider
                smallArrows
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                iconsSlider
                smallArrows
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

export default IconsSlider;
