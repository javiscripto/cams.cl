import { motion } from "framer-motion";

export const Contacto = () => {
  return (
    <>
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
        Contacto
      </motion.h1>
    </>
  );
};
