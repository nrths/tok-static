export type TNewsItem = {
  id: number;
  upper?: string;
  title: string;
  img: string;
  description?: string;
  accent: string;
  redirection: string;
};

const News: TNewsItem[] = [
  {
    id: 0,
    upper: "примите участие в номинации",
    title: "лучший интерьер\nс мебелью ток",
    img: "/images/add_awards.svg",
    description:
      "Российский производитель мебели ТОК\nприглашает дизайнеров, архитекторов, дизайн-студии,\nархитектурные бюро, авторские коллективы, принять участие\nв нашей номинации в рамках ADD awards «Лучший интерьер\nс мебелью ТОК».",
    accent: "общий призовой фонд номинации: 500 000 ₽",
    redirection: "https://addawards.ru/sponsors/218053/",
  },
  {
    id: 1,
    title: "еженедельный розыгрыш столиков",
    img: "/images/other/raffle.jpg",
    accent: "следите за условиями в соцсетях",
    redirection: "https://instargam.com/tok_mebel",
  },
  {
    id: 2,
    title: "выставка мебели\nпредметов интерьера\nи искусства",
    img: "/images/artdom.svg",
    description:
      "Мебельная фабрика ТОК представит свои новые модели на эксклюзивном выставочном проекте ARTDOM, посвященном формированию мебельной и интерьерной моды.",
    accent: "16-18 февраля в гостином дворе",
    redirection: "https://artdom-design.ru/",
  },
];

export { News };
