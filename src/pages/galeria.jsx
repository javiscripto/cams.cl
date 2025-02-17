import { ItemlistCategory } from "../components/itemListCategory";
import { motion } from "framer-motion";

export const Galeria = () => {
  return (
    <div className="container">
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
        Te invito a ver mis obras
      </motion.h1>
      <p>
        Soy una artista visual apasionada especializada en la creación de obras
        únicas que retratan momentos especiales, personas especiales y mascotas
        a través de diversas técnicas.
      </p>
      <ItemlistCategory />
    </div>
  );
};
