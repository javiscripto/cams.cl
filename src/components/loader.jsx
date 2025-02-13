import styles from "./loader.module.css";

export const Loader = ({ num }) => {
  return (
    <div className={styles.container}>
      <div></div>
      <span>{num}</span>
      <span>%</span>
    </div>
  );
};
