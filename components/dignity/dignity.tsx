import { FC, useEffect, useState } from "react";
import styles from "./dignity.module.css";
import Image from "next/image";
import { TDignity } from "@/lib/lists";

export type TDignityProps = {
  dignity: TDignity;
};

const Dignity: FC<TDignityProps> = ({ dignity }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <>
      <div className={styles.listItem}>
        <Image
          src={dignity.icon}
          alt={""}
          width={mobile ? 30 : 50}
          height={mobile ? 30 : 50}
          className={styles.icon}
        />
        <p className={styles.title}>{dignity.title}</p>
        <div className={styles.childrenWrapper}>
          {dignity.children !== undefined && (
            <div className={styles.children}>
              {
                <div className={styles.child}>
                  {dignity.children[0].map((child: any, index: any) => (
                    <p key={index}>{child}</p>
                  ))}
                </div>
              }
              <div className={styles.child}>
                {dignity.children[1].map((child: string, index: number) => (
                  <p key={index}>{child}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dignity;
