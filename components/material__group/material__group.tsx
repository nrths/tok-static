import { FC } from "react";
import styles from "./material__group.module.css";
import Material from "../material/material";
import { TMaterial, TMaterialGroup } from "@/assets/materials";

export type MaterialGroupProps = {
    category: TMaterialGroup | undefined;
    handleClick: (e: any, name: string, category: TMaterialGroup, type: string) => void;
};

const MaterialGroup: FC<MaterialGroupProps> = ({ category, handleClick }) => {
  return (
    <>
      {category && <h3 className={styles.material__name}>{category.title}</h3>}
      <div className={styles.category__wrapper}>
        {category && category.materials.map((material: TMaterial) => (
          <div
            key={material.id}
            onClick={(e) =>
              handleClick(e, material.name, category, material.type!)
            }
          >
            <Material material={material} category={category}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default MaterialGroup;
