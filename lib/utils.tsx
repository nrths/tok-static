import { TMaterialGroup } from "@/assets/materials";
import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}

export const maskPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
}

export const switchCategory = (productCategory: string) => {
  let category = "";
  // productCategory.includes("TABLE") ? category = "столы" : category = ''
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
}

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