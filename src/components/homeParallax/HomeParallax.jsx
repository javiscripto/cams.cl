import { useRef } from "react";
import styles from "./HomeParallax.module.css";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimentions from "./useDimetions";

const images = [
  {
    srcImg: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/teleton1.webp",
  },
  {
    srcImg: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/teleton4.webp",
  },
  {
    srcImg:
      "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/embarazo1.webp",
  },
  {
    srcImg:
      "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/embarazo2.webp",
  },
  {
    srcImg: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/mascota1.webp",
  },
  {
    srcImg: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/mascota2.webp",
  },
  {
    srcImg:
      "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/sesion1_1.webp",
  },
  {
    srcImg:
      "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/sesion2_2.webp",
  },
];

const Column = ({ imgs, y }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {imgs.map((img) => (
        <div key={img.srcImg} className={styles.imageContainer}>
          <img src={img.srcImg} alt={img.srcImg} />
        </div>
      ))}
    </motion.div>
  );
};

export const HomeParallax = () => {
  const container = useRef(null);
  const { height } = useDimentions();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.15]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.4]);
  return (
    <div ref={container} className={styles.container}>
      <Column imgs={[images[0], images[1]]} y={y} />
      <Column imgs={[images[2], images[3]]} y={y2} />
      <Column imgs={[images[4], images[5]]} y={y3} />
      <Column imgs={[images[6], images[7]]} y={y4} />
    </div>
  );
};
