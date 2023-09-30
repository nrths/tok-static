import { FC } from "react";
import styles from "./material__group.module.css";
import Material from "../material/material";
import DropdownBlock from "../dropdown__block/dropdown__block";
import { TMaterial, TMaterialGroup } from "@/assets/materials";

export type FabricGroupProps = {
  category: TMaterialGroup;
  handleClick: (
    e: any,
    name: string,
    category: TMaterialGroup,
    type: string
  ) => void;
  key?: string | number;
};

const FabricGroup: FC<FabricGroupProps> = ({ category, handleClick }) => {
  return (
    <>
      <DropdownBlock materials loading={false} title={category.materials[0].type!}>
        <div className={`${styles.category__wrapper} `}>
          {category.materials.map((fabric: TMaterial) => (
            <div
              key={fabric.id}
              onClick={(e) =>
                handleClick(e, fabric.name, category, fabric.type!)
              }
            >
              <Material material={fabric} category={category} />
            </div>
          ))}
        </div>
      </DropdownBlock>
    </>
  );
};

export default FabricGroup;
