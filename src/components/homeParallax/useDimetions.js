import { useState, useEffect } from "react";
const useDimentions = () => {
  const [dimentions, setDimetions] = useState({
    width: 0,
    height: 0,
  });

  const updateDimentions = () => {
    const { innerWith, innerHeight } = window;
    setDimetions({
      width: innerWith,
      height: innerHeight,
    });
  };
  useEffect(() => {
    updateDimentions();
    window.addEventListener("resize", updateDimentions);
    return () => {
      window.removeEventListener("resize", updateDimentions);
    };
  }, []);

  return dimentions;
};

export default useDimentions;
