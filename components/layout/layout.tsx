'use client'

import Header from "@/components/header/header";
import styles from "./layout.module.css";
// import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from "react";
import Footer from "@/components/footer/footer";

const name = "nrths";

type Props = {
  // home?: boolean;
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  // const pathname = usePathname()

  return (
    <div className={styles.container}>
      <Suspense>
        <Header />
      </Suspense>
      {children}
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
