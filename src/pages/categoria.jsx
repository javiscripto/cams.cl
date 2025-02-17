//recibe como param el nombre de la categoria
import { useParams } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import { motion } from "framer-motion";
import { LenisScroll } from "../components/lenis";

export const Categoria = () => {
  const { categoria } = useParams();

  return (
    <LenisScroll>
      <motion.h1
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0 }}
      >
        {categoria}
      </motion.h1>
      <Gallery categoria={categoria} />
    </LenisScroll>
  );
};
