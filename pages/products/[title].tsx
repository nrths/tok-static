import { useRouter } from "next/router";
import { products } from "@/assets/products";
import ProductDetails from "@/components/product__page/product__page";
import Head from "next/head";
import { Metadata, NextPage } from "next";
import DownloadWidget from "@/components/download__widget/download__widget";
import DropdownBlock from "@/components/dropdown__block/dropdown__block";
import Header from "@/components/header/header";
import MaterialsWidget from "@/components/materials__widget/materials__widget";
import Description from "@/components/product__info/description/description";
import Details from "@/components/product__info/details/details";
import DetailsWithUnderframe from "@/components/product__info/details/details__underframe";
import ProjectSlider from "@/components/sliders/projects/slider__projects";
import SizesSlider from "@/components/sliders/sizes/slider__sizes";
import VisualSlider from "@/components/sliders/visuals/slider_visuals";
import styles from "@/styles/product.module.css";
import ModelsSlider from "@/components/sliders/models/slider__models";

const ProductPage:NextPage = ({ item }: any) => {
  const router = useRouter();
//  const seoTitle = `${item.name.toUpperCase()} | TOK - Фабрика мебели`
  
  return (
    <>
      <Header />

      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.slider}>
            {<ModelsSlider product={item} />}
          </div>
          {/* <div className={styles.main}> */}
          {item.title === "altay" || item.title === "konus" ? (
            <DetailsWithUnderframe
              product={item}
              className={`displayMobileFlex  displayNone`}
            />
          ) : (
            <Details
              product={item}
              className={`displayMobileFlex displayNone`}
            />
          )}
          {/* </div> */}
        </section>

        <section className={styles.dropdowns}>
          <div className={styles.descriptionWrapper}>
            <Description product={item} />
            {item.title === "altay" || item.title === "konus" ? (
              <DetailsWithUnderframe
                product={item}
                className={`displayMobileFlex  displayFlex`}
              />
            ) : (
              <Details product={item} className={`displayFlex`} />
            )}
          </div>

          <DropdownBlock loading={true} title={"размеры"}>
            <SizesSlider product={item} />
          </DropdownBlock>
          <DropdownBlock loading={false} title={"материалы отделки"}>
            <MaterialsWidget item={item} />
          </DropdownBlock>
          {item.model && (
            <DropdownBlock loading={false} title={"скачать"}>
              <DownloadWidget product={item} />
            </DropdownBlock>
          )}
          {item.designersProjects.length > 0 && (
            <DropdownBlock loading={false} title={"фото и проекты дизайнеров"}>
              <ProjectSlider product={item} />
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
                  и&nbsp;СБОРКЕ товара. Бесплатная Доставка по&nbsp;г.
                  Санкт-Петербург до&nbsp;парадной при&nbsp;заказе от
                  80&nbsp;000&nbsp;руб., ниже:
                  от&nbsp;20&nbsp;000&nbsp;руб.&nbsp;в&nbsp;зависимости
                  от&nbsp;зоны доставки. Доставка по&nbsp;России осуществляется
                  транспортной компанией. Точные сроки указываются при
                  подтверждении заказа. Доставка по&nbsp;России осуществляется
                  при 100% оплате товара.
                </p>
              </div>
              <div className={styles.block}>
                <h3 className={styles.heading}>срок поставки</h3>
                <p className={styles.details}>
                  Если желаемая модель есть на&nbsp;складе, то&nbsp;срок
                  поставки до&nbsp;5&nbsp;рабочих дней с&nbsp;момента заказа;
                  если товара нет в&nbsp;наличии, то&nbsp;срок поставки мебели
                  до&nbsp;45&nbsp;рабочих дней.
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
          {item.title === "altay" || item.title === "konus" ? (
            <DetailsWithUnderframe
              product={item}
              className={`displayDesktopFlex`}
            />
          ) : (
            <Details product={item} className={`displayDesktopFlex`} />
          )}
        </section>
        {item.visualisations.length > 0 && (
          <section className={styles.visuals}>
            <VisualSlider product={item} />
          </section>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const data = products;
  const paths = data.map((item) => {
    return {
      params: { title: `${item.title}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const data = await products.find((item) => item.title === params.title);
  return {
    props: {
      item: data,
    },
  };
}

export default ProductPage;

