import { motion } from "framer-motion";

export const Header = () => {
  const titulo = [
    "C",
    "a",
    "m",
    "i",
    "l",
    "a",
    " ",
    "M",
    "e",
    "d",
    "i",
    "n",
    "a",
  ];

  return (
    <header className="App-header">
      <video
        className="video"
        src={"/convertedLente.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="headerContainer">
        <h1>
          {titulo.map((letra, index) => (
            <motion.span
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              clasName="letraTitulo"
              key={index}
            >
              {letra}
            </motion.span>
          ))}
        </h1>
        <img className="logo" src="/fav.png" alt="logo" />
        <motion.h2
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          fotografía
        </motion.h2>
      </div>
    </header>
  );
};
