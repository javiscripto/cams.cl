import { motion } from "framer-motion";

export const SobreMi = () => {
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
        Sobre Mi
      </motion.h1>
      <div className="container">
        <div style={{ height: "200px" }}>
          <img
            src="https://camscl17.s3.us-east-1.amazonaws.com/imgs/mascota1.webp"
            alt="camila"
            style={{ height: "200px" }}
          />
        </div>

        <p>
          Soy Camila Medina, licenciada en Artes Visuales con especialización en
          Fotografía. Mi enfoque se centra en capturar momentos espontáneos que
          revelan las emociones de manera auténtica, buscando siempre la esencia
          de lo que está detrás de cada instante. Para mí, las fotografías son
          mucho más que imágenes; son recuerdos, fragmentos de historia que
          perduran en el tiempo. Mi misión es que cada fotografía que me
          encomiendas se convierta en ese puente hacia los recuerdos más
          preciados, un reflejo genuino de lo vivido.
        </p>
      </div>
    </>
  );
};
