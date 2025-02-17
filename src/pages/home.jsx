import { Header } from "../components/header.jsx";
import { HomeParallax } from "../components/homeParallax/HomeParallax.jsx";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <HomeParallax />
    </div>
  );
};
