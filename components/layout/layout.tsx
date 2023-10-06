import Header from "@/components/header/header";
import styles from "./layout.module.css";
import Footer from "@/components/footer/footer";

const name = "nrths";

type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
