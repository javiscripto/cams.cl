import { easeIn, motion } from "framer-motion";

export const InnerTransition = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const slide = {
    initial: { top: 0, opacity: 0.9 },
    enter: {
      top: "100vh",
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeIn,
      },
    },
    exit: { top: 0, transition: { duration: 1 } },
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0 },
  };
  return (
    <div className="innerContainer">
      <motion.div {...anim(slide)} className="slide">
        <img src="/fav.png" alt="imagen" />
      </motion.div>

      <motion.div {...anim(opacity)}>{children}</motion.div>
    </div>
  );
};
