import { useRouter } from "next/router";
import DropdownBlock from "../dropdown__block/dropdown__block";
import Header from "../header/header";
import Description from "../product__info/description/description";
import Details from "../product__info/details/details";
import ProjectSlider from "../sliders/projects/slider__projects";
import SizesSlider from "../sliders/sizes/slider__sizes";
import VisualSlider from "../sliders/visuals/slider_visuals";
import styles from "../../styles/product.module.css";
import { TProduct } from "@/assets/products";
import { FC, useState, MouseEvent, useRef, Suspense } from "react";
import MaterialsWidget from "../materials__widget/materials__widget";
import DownloadWidget from "../download__widget/download__widget";
import dynamic from "next/dynamic";
import DetailsWithUnderframe from "../product__info/details/details__underframe";
import ModelsSlider from "../sliders/models/slider__models";

export type TProductPageProps = {
  product: TProduct;
};
const ProductDetails: FC<TProductPageProps> = ({ product }) => {
  const router = useRouter();
  // console.log(product);
  return (
    <>
      <Header />

      <div className={styles.container}>
        {product !== undefined && (
          <section className={styles.section}>
            <div className={styles.slider}>
              <ModelsSlider product={product} />
            </div>
            {product.title === "altay" ||
            product.title === "altay-razdvij" ||
            product.title === "konus" ||
            product.title === "homie" ||
            product.title === "baul" ||
            product.title === "gliba" ||
            product.title === "maki" ||
            product.title.startsWith("klinker") ? (
              <DetailsWithUnderframe
                product={product}
                className={`displayMobileFlex  displayNone`}
              />
            ) : (
              <Details
                product={product}
                className={`displayMobileFlex displayNone`}
              />
            )}
          </section>
        )}

        <section className={styles.dropdowns}>
          <div className={styles.descriptionWrapper}>
            <Description product={product} />
            {product.title.startsWith("altay") ||
            product.title === "konus" ||
            product.title === "homie" ||
            product.title === "baul" ||
            product.title === "gliba" ||
            product.title === "maki" ||
            product.title.startsWith("klinker") ? (
              <DetailsWithUnderframe
                product={product}
                className={`displayFlex`}
              />
            ) : (
              <Details product={product} className={`displayFlex`} />
            )}
          </div>

          <DropdownBlock loading={true} title={"размеры"}>
            <SizesSlider product={product} />
          </DropdownBlock>
          <DropdownBlock loading={false} title={"материалы отделки"}>
            <MaterialsWidget item={product} />
          </DropdownBlock>
          {product.model && (
            <DropdownBlock loading={false} title={"скачать"}>
              <DownloadWidget product={product} />
            </DropdownBlock>
          )}
          {product.designersProjects.length > 0 && (
            <DropdownBlock loading={false} title={"фото и проекты дизайнеров"}>
              <ProjectSlider product={product} />
            </DropdownBlock>
          )}
          <DropdownBlock
            loading={false}
            title={"сроки, доставка, сборка"}
            className='lastDropdown'
          >
            {/* TODO: переделать в адаптивный виджет (сюда и на страницу "покупателям") */}
            <div className={styles.terms}>
              <div className={styles.block}>
                <h3 className={styles.heading}>доставка</h3>
                <p className={styles.details}>
                  Компания ТОК предоставляет услуги по&nbsp;ДОСТАВКЕ
                  и&nbsp;СБОРКЕ товара. Доставка по&nbsp;России осуществляется
                  транспортной компанией. Точные сроки указываются при
                  подтверждении заказа. Доставка по&nbsp;России осуществляется
                  при 100% оплате товара.
                </p>
              </div>
              <div className={styles.block}>
                <h3 className={styles.heading}>срок поставки</h3>
                <p className={styles.details}>
                  Если желаемая модель есть на&nbsp;складе, то&nbsp;срок
                  отгрузки со&nbsp;склада поставщика до&nbsp;10&nbsp;рабочих
                  дней с&nbsp;момента заказа и&nbsp;доставка; если товара нет
                  в&nbsp;наличии, срок изготовления до&nbsp;50&nbsp;рабочих
                  дней, до&nbsp;10&nbsp;рабочих дней на&nbsp;отгрузку
                  и&nbsp;доставка.
                </p>
              </div>
              <div className={styles.block}>
                <h3 className={styles.heading}>
                  внесение изменений или отмена заказа
                </h3>
                <p className={styles.details}>
                  Если вы&nbsp;решили изменить что-то в&nbsp;вашем заказе,
                  то&nbsp;проинформируйте нас в&nbsp;течение 48&nbsp;часов
                  с&nbsp;момента оформления заказа.
                </p>
              </div>
              <div className={styles.block}>
                <h3 className={styles.heading}>ненадлежащее качество</h3>
                <p className={styles.details}>
                  Мы&nbsp;много работаем, чтобы наша продукция радовала вас.
                  Однако, если вы&nbsp;считаете, что получили товар
                  ненадлежащего качества, обратитесь к нам как можно скорее.
                  Мы&nbsp;рассмотрим ваше обращение в&nbsp;кратчайшие
                  сроки&nbsp;и, в&nbsp;зависимости от&nbsp;проблемы, предложим
                  вам возврат, ремонт или замену товара.
                </p>
              </div>
              <div className={styles.block}>
                <h3 className={styles.heading}>
                  оговорка об ограничении ответственности
                </h3>
                <p className={styles.details}>
                  Цветопередача на&nbsp;вашем устройстве может отличаться
                  от&nbsp;фактического цвета. Часть изображений является
                  трехмерной моделью и&nbsp;может отличаться от&nbsp;реальной
                  модели.
                </p>
              </div>
            </div>
          </DropdownBlock>
        </section>
        <section className={styles.detailsMobile}>
          {product.title === "altay" ||
          product.title === "altay-razdvij" ||
          product.title === "konus" ||
          product.title === "homie" ||
          product.title === "baul" ||
          product.title === "gliba" ||
          product.title === "maki" ||
          product.title.startsWith("klinker") ? (
            <DetailsWithUnderframe
              product={product}
              className={`displayDesktopFlex`}
            />
          ) : (
            <Details product={product} className={`displayDesktopFlex`} />
          )}
        </section>
        {product.visualisations.length > 0 && (
          <section className={styles.visuals}>
            <VisualSlider product={product} />
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
