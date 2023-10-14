import { TProduct } from "./products";
import { klinker_k25, klinker_k50, klinker_p25, klinker_p50 } from "./products/klinker";
import { klinker_b_k25, klinker_b_k50, klinker_b_p25, klinker_b_p50 } from "./products/klinker_b";
import { klinker_c_k25, klinker_c_k50, klinker_c_p25, klinker_c_p50 } from "./products/klinker_c";
import { klinker_f_k25, klinker_f_k50, klinker_f_p25, klinker_f_p50 } from "./products/klinker_f";
import { klinker_f_r_k25, klinker_f_r_k50, klinker_f_r_p25, klinker_f_r_p50 } from "./products/klinker_f_r";
import { klinker_ov_f_k25, klinker_ov_f_k50, klinker_ov_f_p25, klinker_ov_f_p50 } from "./products/klinker_oval";
import { klinker_sls_k25, klinker_sls_k50, klinker_sls_p25, klinker_sls_p50 } from "./products/klinker_sls";


export type TProductSeries = {
  id: number;
  title: string;
  position: number;
  mobilePosition?: number;
  sortedPosition: number;
  previewImg: string;
  name: string;
  products: TProduct[];
  tags?: string[];
  category: string;
};

export const klinker = {
  id: 1,
  title: "ser-klinker",
  position: 22,
  sortedPosition: 15,
  mobilePosition: 21,
  previewImg: "/images/products/klinker/preview.jpg",
  name: "клинкер",
  products: [klinker_k25, klinker_k50, klinker_p25, klinker_p50],
  tags: ['стол', 'круглый'],
  category: 'TABLE_DINNER CIRCLE',
};

export const klinker_b = {
  id: 2,
  title: "ser-klinker-b",
  position: 2,
  sortedPosition: 2,
  mobilePosition: 2,
  previewImg: "/images/products/klinker-b/preview.jpg",
  name: "клинкер-б журнальный",
  products: [klinker_b_k25, klinker_b_k50, klinker_b_p25, klinker_b_p50],
  tags: ['стол', 'журнальный'],
  category: 'COFFEE_TABLE',
};

export const klinker_oval = {
  id: 3,
  title: "ser-klinker-ov",
  position: 10,
  sortedPosition: 9,
  mobilePosition: 13,
  previewImg: "/images/products/klinker-oval/preview.jpg",
  name: "клинкер овал",
  products: [
    klinker_ov_f_k25,
    klinker_ov_f_k50,
    klinker_ov_f_p25,
    klinker_ov_f_p50,
  ],
  tags: ['стол', 'обеденный'],
  category: 'TABLE_DINNER LONG',
};

export const klinker_c = {
  id: 4,
  title: "ser-klinker-c",
  position: 30,
  sortedPosition: 60,
  mobilePosition: 17,
  previewImg: "/images/products/klinker-s/preview.jpg",
  name: "клинкер-с журнальный",
  products: [klinker_c_k25, klinker_c_k50, klinker_c_p25, klinker_c_p50],
  tags: ['стол', 'журнальный'],
  category: 'COFFEE_TABLE',
};

export const klinker_sls = {
  id: 5,
  title: "ser-klinker-sls-2",
  position: 25,
  sortedPosition: 19,
  mobilePosition: 29,
  previewImg: "/images/products/klinker-sls-2/preview.jpg",
  name: "клинкер слс-2",
  products: [
    klinker_sls_k25,
    klinker_sls_k50,
    klinker_sls_p25,
    klinker_sls_p50,
  ],
  tags: ['стол', 'обеденный'],
  category: 'TABLE_DINNER LONG',
};

export const klinker_f = {
  id: 6,
  title: "ser-klinker-f",
  position: 1,
  sortedPosition: 1,
  mobilePosition: 1,
  previewImg: "/images/products/klinker-f/preview.jpg",
  name: "клинкер-ф",
  products: [klinker_f_k25, klinker_f_k50, klinker_f_p25, klinker_f_p50],
  tags: ['стол', 'круглый'],
  category: 'TABLE_DINNER CIRCLE',
};

export const klinker_f_r = {
  id: 7,
  title: "ser-klinker-f-r",
  position: 39,
  sortedPosition: 25,
  mobilePosition: 33,
  previewImg: "/images/products/klinker-f-r/preview.jpg",
  name: "клинкер-ф раздвижной",
  products: [
    klinker_f_r_k25,
    klinker_f_r_k50,
    klinker_f_r_p25,
    klinker_f_r_p50,
  ],
  tags: ['стол', 'круглый', 'раздвижной'],
  category: 'TABLE_DINNER TABLE_SLIDING',
};

export const series = [klinker, klinker_b, klinker_c, klinker_oval, klinker_sls, klinker_f, klinker_f_r];
