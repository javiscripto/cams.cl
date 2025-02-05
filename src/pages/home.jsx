import { Header } from "../components/header.jsx";
import { ItemlistCategory } from "../components/itemListCategory";
import { Parallax } from "../components/parallax.jsx";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Parallax />
    </div>
  );
};
