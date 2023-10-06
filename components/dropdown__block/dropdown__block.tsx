import { useState, MouseEvent, FC, MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import Button from "../buttons/button";
import styles from "./dropdown__block.module.css";

type DropdownProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  loading: boolean;
  children: ReactNode;
  title: string;
  className?: string;
  id?: string;
  materials?: boolean;
};

const DropdownBlock: FC<DropdownProps> = ({
  onClick,
  loading,
  children,
  title,
  className,
  materials,
}) => {
  const [showBlock, setShowBlock] = useState(materials ? true : false);
  const [icon, setIcon] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowBlock(!showBlock);
    setIcon(!icon);
  };

  if (materials) {
    return (
      <div className={`${styles.dropdownSection} ${className}`}>
        <div onClick={(e) => handleClick(e)}>
          <Button
            onClick={undefined}
            type='button'
            className={styles.dropdownButton}
          >
            {title}{" "}
            <Image
              src={
                icon
                  ? "/images/menu_icons/minus.svg"
                  : "/images/menu_icons/plus.svg"
              }
              alt=''
              width={24}
              height={24}
            />
          </Button>
        </div>
        {showBlock && <div className={styles.dropdownBlock}>{children}</div>}
      </div>
    );
  } else {
    return (
      <div className={`${styles.dropdownSection} ${className}`}>
        <div onClick={(e) => handleClick(e)}>
          <Button
            onClick={undefined}
            type='button'
            className={styles.dropdownButton}
          >
            {title}{" "}
            <Image
              src={
                icon
                  ? "/images/menu_icons/minus.svg"
                  : "/images/menu_icons/plus.svg"
              }
              alt=''
              width={24}
              height={24}
            />
          </Button>
        </div>
        {showBlock && <div className={styles.dropdownBlock}>{children}</div>}
      </div>
    );
  }
};

export default DropdownBlock;
