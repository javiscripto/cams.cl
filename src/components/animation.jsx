import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


const AnimationsDemo = () => {
  const boxRef = useRef(null); // Referencia para el elemento DOM

  useEffect(() => {
    // Crear una animación básica
    gsap.to(boxRef.current, {
      x: 200, // Mover 200px en el eje X
      duration: 2, // Duración de 2 segundos
      rotation: 360, // Rotación completa
      scale: 1.5, // Escala del elemento
      ease: "power3.out", // Efecto de suavizado
    });
  }, []);

  return (
    <div
      ref={boxRef} // Asociamos la referencia al elemento
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "orange",
        margin: "50px auto",
      }}
    >
      {/* Caja animada */}
    </div>
  );
};

export default AnimationsDemo;

