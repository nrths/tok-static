import { altay } from "./products/altay";
import { baikal } from "./products/baikal";
import { baikal_mt } from "./products/baikal_mt";
import { baul } from "./products/baul";
import { buton } from "./products/buton";
import { flakon } from "./products/flakon";
import { flakon_2 } from "./products/flakon_2";
import { gliba } from "./products/gliba";
import { hameleon } from "./products/hameleon";
import { haski } from "./products/haski";
import { homie } from "./products/homie";
import { konus } from "./products/konus";
import { maki } from "./products/maki";
import { nimb } from "./products/nimb";
import { nori } from "./products/nori";
import { orbita } from "./products/orbita";
import { orbita_m } from "./products/orbita_m";
import { pud } from "./products/pud";
import { ris } from "./products/ris";
import { rol } from "./products/rol";
import { slaider } from "./products/slaider";
import { slot } from "./products/slot";
import { velvet_krug } from "./products/velvet_krug";
import { velvet_krug_fl } from "./products/velvet_krug_fl";
import { velvet_krug_ju } from "./products/velvet_krug_ju";
import { velvet_krug_razdvij } from "./products/velvet_krug_razdvij";
import { velvet_oval } from "./products/velvet_oval";
import { velvet_oval_2 } from "./products/velvet_oval_2";
import { velvet_oval_fl } from "./products/velvet_oval_fl";
import { velvet_sl } from "./products/velvet_sl";
import { velvet_sl_2 } from "./products/velvet_sl_2";
import { velvet_sl_fl } from "./products/velvet_sl_fl";
import { velvet } from "./products/velvet";
import {
  klinker,
  klinker_b,
  klinker_c,
  klinker_f,
  klinker_f_r,
  klinker_oval,
  klinker_sls,
} from "./series";
import { altay_razdvij } from "./products/altay-razdvij";

export type TProject = {
  img: string;
  author?: string;
  artist?: string;
  photographer?: string;
};


export type TProduct = {
  id: number;
  title: string;
  modelsSlider: string[];
  description: string;
  designer: string;
  dateOfCreation: number;
  countertop?: string[];
  underframe?: string[];
  sizesSlider: string[];
  visualisations: string[];
  designersProjects: TProject[];
  price: number;
  params: any;
  category: string;
  name: string;
  previewImg: string;
  position?: number;
  sortedPosition?: number;
  mobilePosition?: number;
  advice?: string;
  catalogue?: string;
  collage?: string;
  model?: string;
  tags?: string[];
};

export const products = [
  altay,
  altay_razdvij,
  baikal,
  baikal_mt,
  baul,
  buton,
  flakon,
  flakon_2,
  gliba,
  hameleon,
  haski,
  homie,
  konus,
  maki,
  nimb,
  nori,
  orbita,
  orbita_m,
  pud,
  ris,
  rol,
  slaider,
  slot,
  velvet_krug,
  velvet_krug_fl,
  velvet_krug_ju,
  velvet_krug_razdvij,
  velvet,
  velvet_oval,
  velvet_oval_2,
  velvet_oval_fl,
  velvet_sl,
  velvet_sl_2,
  velvet_sl_fl,
];

export const allProducts = [
  ...products,
  ...klinker.products,
  ...klinker_b.products,
  ...klinker_c.products,
  ...klinker_oval.products,
  ...klinker_sls.products,
  ...klinker_f.products,
  ...klinker_f_r.products
];
