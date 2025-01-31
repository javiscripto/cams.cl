import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.textContainer}>
        <p>Copyright &copy; 2025 - CAMS</p>
        <p>desarrollado por Javiscripto studio</p>
      </div>

      <div className={styles.iconContainer}>
        <div className={styles.iconItem}>
          <a href="https://www.instagram.com/">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <p>instagram</p>
        </div>

        <div className={styles.iconItem}>
          <a href="https://www.flickr.com/">
            <box-icon name="flickr" type="logo"></box-icon>
          </a>
          <p>flickr</p>
        </div>

        <div className={styles.iconItem}>
          <a href="https://www.tiktok.com/">
            <box-icon name="tiktok" type="logo"></box-icon>
          </a>
          <p>tiktok</p>
        </div>
      </div>
    </footer>
  );
};
