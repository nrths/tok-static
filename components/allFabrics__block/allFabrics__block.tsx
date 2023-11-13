import styles from "./allFabrics__block.module.css";
import { FC } from "react";
import FabricGroup from "../material__group/fabric__group";
import { TMaterialGroup } from "@/assets/materials";
import DropdownBlock from "../dropdown__block/dropdown__block";

export type FabricsGroupProps = {
  handleClick: (
    e: any,
    name: string,
    category: TMaterialGroup,
    type: string
  ) => void;
  fabrics: TMaterialGroup[];
  id?: string;
};

const AllFabricsBlock: FC<FabricsGroupProps> = ({ fabrics, handleClick }) => {
  const cat1 = fabrics.filter((fabric) => fabric.title === "ткань категория 1");
  const cat2 = fabrics.filter((fabric) => fabric.title === "ткань категория 2");
  const cat3 = fabrics.filter((fabric) => fabric.title === "ткань категория 3");
  return (
    <div className={styles.wrapper_inside}>
      <DropdownBlock loading={false} title={"ткани категория 1"} >
      <div className={styles.wrapper_inside}>
        {cat1.map((fabric) => (
          <FabricGroup
            category={fabric}
            handleClick={handleClick}
            key={fabric.id}
          />
        ))}
        </div>
      </DropdownBlock>
      <DropdownBlock loading={false} title={"ткани категория 2"} >
      <div className={styles.wrapper_inside}>
        {cat2.map((fabric) => (
          <FabricGroup
            category={fabric}
            handleClick={handleClick}
            key={fabric.id}
          />
        ))}
        </div>
      </DropdownBlock>
      <DropdownBlock loading={false} title={"ткани категория 3"} >
      <div className={styles.wrapper_inside}>
        {cat3.map((fabric) => (
          <FabricGroup
            category={fabric}
            handleClick={handleClick}
            key={fabric.id}
          />
        ))}
        </div>
      </DropdownBlock>
    </div>
  );
};

export default AllFabricsBlock;
