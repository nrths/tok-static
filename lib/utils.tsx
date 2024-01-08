import { TMaterialGroup } from "@/assets/materials";
import { TProduct } from "@/assets/products";
import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}

export const maskPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const switchCategory = (productCategory: string) => {
  let category = "";
  switch (productCategory) {
    case "CHAIR":
      category = "стулья";
      break;
    case "BED":
      category = "кровати";
      break;
    case "SOFA":
      category = "диваны";
      break;
    default:
      category = "столы";
  }
  return category;
};

export const findCategory = (category: TMaterialGroup) => {
  return category;
};

export const findMaterial = (
  category: TMaterialGroup,
  name: string,
  type: string
) => {
  return category.materials.find(
    (material) => material.name === name && material.type === type
  );
};

export const switchPlaceholderTop = (p: TProduct) => {
  if (p.category.includes("BED")) {
    const placeholder = `наличие механизма`;
    return placeholder;
  } else {
    if (p.title === "baul" || p.title === "gliba" || p.title === "klin" || p.title === "klin-2") {
      const placeholder = `выберите отделку\nстолешницы`;
      return placeholder;
    } else {
      const placeholder = `выберите отделку\nоснования`;
      return placeholder;
    }
  }
};

export const switchPlaceholderMiddle = (p: TProduct) => {
  if (p.category.includes("BED")) {
    const placeholder = `выберите отделку`;
    return placeholder;
  } else {
    if (p.title === "baul" || p.title === "gliba" || p.title === "klin" || p.title === "klin-2") {
      const placeholder = `выберите отделку\nоснования`;
      return placeholder;
    } else {
      const placeholder = `выберите отделку\nстолешницы`;
      return placeholder;
    }
  }
};


export const switchLabelTop = (p: TProduct) => {
  if (p.category.includes("BED")) {
    const label = `подъемный\nмеханизм:`;
    return label;
  } else {
    if (p.title === "baul" || p.title === "gliba"|| p.title === "klin" || p.title === "klin-2") {
      const label = `отделка\nстолешницы:`;
      return label;
    } else {
      const label = `отделка\nоснования:`;
      return label;
    }
  }
};

export const switchLabelMiddle = (p: TProduct) => {
  if (p.category.includes("BED")) {
    const label = `отделка:`;
    return label;
  } else {
    if (p.title === "baul" || p.title === "gliba" || p.title === "klin" || p.title === "klin-2") {
      const label = `отделка\nоснования:`;
      return label;
    } else {
      const label = `отделка\nстолешницы:`;
      return label;
    }
  }
};
