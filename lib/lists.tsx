export type TListItem = {
  name?: string;
  link: string;
  alt?: string;
  img?: string | undefined;
};

export type TDignity = {
  icon: string;
  title: string;
  children?: string[][] | undefined;
};

export type TNewModel = {
  link?: string;
  name: string;
  description: string;
  img: string;
};

const footerProductsList: TListItem[] = [
  {
    name: "все",
    link: "/products",
  },
  {
    name: "новинки",
    link: "/new-items",
  },
  {
    name: "столы",
    link: "/products/tables",
  },
  {
    name: "столики",
    link: "/products/coffee-tables",
  },
  {
    name: "стулья",
    link: "/products/chairs",
  },
  {
    name: "кровати",
    link: "/products/beds",
  },
  {
    name: "в наличии",
    link: "/in-stock",
  },
];

const footerInfoList: TListItem[] = [
  {
    name: "продукция",
    link: "/products", 
  },
  {
    name: "о нас",
    link: "/about", 
  },
  {
    name: "публикации",
    link: "/smi", 
  },
  {
    name: "материалы",
    link: "/materials", 
  },
  {
    name: "договор оферты",
    link: "/delivery",
  },
  {
    name: "конкурс",
    link: "/competition", 
  },
  {
    name: "покупателям",
    link: "/for-buyers",
  },
  {
    name: "дизайнерам",
    link: "/for-designers", 
  },
  {
    name: "контакты",
    link: "/contact", 
  },
];

const footerSocialsList: TListItem[] = [
  {
    img: "/images/socials/vk.svg",
    link: "https://vk.com/tok_mebel",
    name: "VK",
  },
  {
    img: "/images/socials/instagram.svg",
    link: "https://instargam.com/tok_mebel",
    name: "Instagram",
  },
  {
    img: "/images/socials/telegram.svg",
    link: "https://t.me/tok_mebel",
    name: "Telegram",
  },
  {
    img: "/images/socials/youtube.svg",
    link: "", // TODO: find out link
    name: "Youtube",
  },
];

const menuProductsList: TListItem[] = [
  {
    name: "столы",
    link: "/products/tables",
    img: "/images/menu_icons/tables.svg",
  },
  {
    name: "столики",
    link: "/products/coffee-tables", 
    img: "/images/menu_icons/small_tables.svg",
  },
  {
    name: "стулья",
    link: "/products/chairs",
    img: "/images/menu_icons/chairs.svg",
  },
  {
    name: "кровати",
    link: "/products/beds",
    img: "/images/menu_icons/beds.svg",
  },
  {
    name: "все",
    link: "/products",
    img: "/images/menu_icons/all.svg",
  },
  {
    name: "новинки",
    link: "/new-items",
    img: "/images/menu_icons/new.svg",
  },
  {
    name: "в наличии",
    link: "/in-stock",
    img: "/images/menu_icons/in-stock.svg",
  },
  {
    name: "дисконт",
    link: "/sale",
    img: "/images/menu_icons/on-sale.svg",
  },
];

export const dignitysList = [
  [
    {
      icon: "/images/menu_icons/delivery.svg",
      title: "доставка по россии\nи странам ближнего зарубежья",
    },
    {
      icon: "/images/menu_icons/time.svg",
      title: "срок изготовления\nдо 30 рабочих дней",
    },
    {
      icon: "/images/menu_icons/list.svg",
      title: "богатый выбор базовых размеров\nи отделочных материалов",
    },
    {
      icon: "/images/menu_icons/like.svg",
      title: "нам уже доверились:",
      children: [
        ["дизайнеры страны", "газпром", "яндекс", "mail group", "русал"],
        ["аскона", "посольство катара", "брусника", "тинькофф", "спартак"],
      ],
    },
  ],
  [
    {
      icon: "/images/menu_icons/thumbs_up.svg",
      title: "качество, не уступающее\nевропейским брендам",
    },
    {
      icon: "/images/menu_icons/factory.svg",
      title: "заказ напрямую с фабрики",
    },
    {
      icon: "/images/menu_icons/publication.svg",
      title: "публикации в лучших\nинтерьерных журналах и передачах",
    },
    {
      icon: "/images/menu_icons/3d.svg",
      title: "3d модели\nдля архитекторов и дизайнеров",
    },
    {
      icon: "/images/menu_icons/map_circle.svg",
      title: "ДВА ШОУРУМА:\nВ МОСКВЕ И САНКТ-ПЕТЕРБУРГЕ",
    },
  ],
];

const newModelsList: TNewModel[] = [
  {
    name: "клинкер овал",
    description: "новая серия столов",
    img: "/images/products/models__new/klinker-oval.jpg",
  },
  {
    name: "клинкер-б",
    description: "новая серия столов",
    img: "/images/products/models__new/klinker-b.jpg",
  },
  {
    name: "флакон",
    description: "новая серия столов",
    img: "/images/products/models__new/flakon.jpg",
  },
  {
    name: "слайдер",
    description: "новая серия столов",
    img: "/images/products/models__new/slaider.jpg",
  },
  {
    name: "клинкер слс-2",
    description: "новая серия столов",
    img: "/images/products/models__new/klinker-sls-2.jpg",
  },
  {
    name: "клинкер-ф раздвижной",
    description: "новая серия столов",
    img: "/images/products/models__new/klinker-f-razdv.jpg",
  },
  {
    name: "флакон 2",
    description: "новая серия столов",
    img: "/images/products/models__new/flakon-2.jpg",
  },
];

const newModelsListMobile: TNewModel[] = [
  {
    name: "клинкер овал",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/klinker-oval.jpg",
  },
  {
    name: "клинкер-б",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/klinker-b.jpg",
  },
  {
    name: "флакон",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/flakon.jpg",
  },
  {
    name: "слайдер",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/slaider.jpg",
  },
  {
    name: "клинкер слс 2",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/klinker-sls-2.jpg",
  },
  {
    name: "клинкер-ф раздвижной",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/klinker-f-razdv.jpg",
  },
  {
    name: "флакон 2",
    description: "новая серия столов",
    img: "/images/products/models__new/mobile/flakon-2.jpg",
  },
];

export {
  footerProductsList,
  footerInfoList,
  footerSocialsList,
  menuProductsList,
  newModelsListMobile,
  newModelsList
};
