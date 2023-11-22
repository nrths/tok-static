import Header from "@/components/header/header";
import styles from ".././../styles/for-buyers.module.css";
import { NextPage } from "next";
import Head from "next/head";

const ForBuyersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Покупателям | ТОК-Мебель</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Покупателям</h1>
        <div className={styles.content}>
          <div className={styles.block}>
            <h3 className={styles.heading}>доставка</h3>
            <p className={styles.text}>
              Компания ТОК предоставляет услуги по&nbsp;ДОСТАВКЕ и&nbsp;СБОРКЕ
              товара. Доставка по&nbsp;России осуществляется транспортной
              компанией. Точные сроки указываются при подтверждении заказа.
              Доставка по&nbsp;России осуществляется при 100% оплате товара.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>срок поставки</h3>
            <p className={styles.text}>
              Если желаемая модель есть на&nbsp;складе, то&nbsp;срок отгрузки
              со&nbsp;склада поставщика до&nbsp;10&nbsp;рабочих дней
              с&nbsp;момента заказа и&nbsp;доставка; если товара нет
              в&nbsp;наличии, срок изготовления до&nbsp;50&nbsp;рабочих дней,
              до&nbsp;10&nbsp;рабочих дней на&nbsp;отгрузку и&nbsp;доставка.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>
              внесение изменений или отмена заказа
            </h3>
            <p className={styles.text}>
              Если вы&nbsp;решили изменить что-то в&nbsp;вашем заказе,
              то&nbsp;проинформируйте нас в&nbsp;течение 48&nbsp;часов
              с&nbsp;момента оформления заказа.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>ненадлежащее качество</h3>
            <p className={styles.text}>
              Мы&nbsp;много работаем, чтобы наша продукция радовала вас. Однако,
              если вы&nbsp;считаете, что получили товар ненадлежащего качества,
              обратитесь к нам как можно скорее. Мы&nbsp;рассмотрим ваше
              обращение в&nbsp;кратчайшие сроки&nbsp;и, в&nbsp;зависимости
              от&nbsp;проблемы, предложим вам возврат, ремонт или замену товара.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>
              оговорка об ограничении ответственности
            </h3>
            <p className={styles.text}>
              Цветопередача на&nbsp;вашем устройстве может отличаться
              от&nbsp;фактического цвета. Часть изображений является трехмерной
              моделью и&nbsp;может отличаться от&nbsp;реальной модели.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>цены</h3>
            <p className={styles.text}>
              На&nbsp;сайте указана рекомендованная розничная цена, которая
              включает НДС.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForBuyersPage;
