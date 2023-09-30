import styles from './allFabrics__block.module.css'
import { FC } from 'react';
import FabricGroup from '../material__group/fabric__group';
import { TMaterialGroup } from '@/assets/materials';

export type FabricsGroupProps = {
    handleClick: (e: any, name: string, category: TMaterialGroup, type: string) => void;
    fabrics: TMaterialGroup[];
    id?: string;
};

const AllFabricsBlock:FC<FabricsGroupProps> = ({ fabrics, handleClick }) => {
  return (
    <div className={styles.wrapper_inside}>
        {fabrics.map((fabric) => <FabricGroup category={fabric} handleClick={handleClick} key={fabric.id}/>)}
    </div>
  );
};

export default AllFabricsBlock;

