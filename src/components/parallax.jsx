import React, { useRef, useEffect } from "react";
import styles from "./parallax.module.css"; // Asegúrate de crear este archivo para los estilos

export const Parallax = () => {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const cardContainer = cardContainerRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      cardContainer.scrollLeft += event.deltaY * 3;
    };

    let startX;
    let scrollLeft;
    let isDown = false;

    const handleMouseDown = (e) => {
      isDown = true;
      cardContainer.classList.add("active");
      startX = e.pageX - cardContainer.offsetLeft;
      scrollLeft = cardContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      cardContainer.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      cardContainer.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - cardContainer.offsetLeft;
      const walk = (x - startX) * 3;
      cardContainer.scrollLeft = scrollLeft - walk;
    };

    cardContainer.addEventListener("wheel", handleWheel);
    cardContainer.addEventListener("mousedown", handleMouseDown);
    cardContainer.addEventListener("mouseleave", handleMouseLeave);
    cardContainer.addEventListener("mouseup", handleMouseUp);
    cardContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardContainer.removeEventListener("wheel", handleWheel);
      cardContainer.removeEventListener("mousedown", handleMouseDown);
      cardContainer.removeEventListener("mouseleave", handleMouseLeave);
      cardContainer.removeEventListener("mouseup", handleMouseUp);
      cardContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cardContainer} ref={cardContainerRef}>
      <div className={styles.card}>
        <h3>item</h3>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit rate </p>
      </div>
      <div className={styles.card}>
        <h3>otr item</h3>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit rate </p>
      </div>
      <div className={styles.card}>
        <h3>otr item</h3>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit rate </p>
      </div>{" "}
      <div className={styles.card}>
        <h3>otr item</h3>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit rate </p>
      </div>
      <div className={styles.card}>Card 4</div>
      <div className={styles.card}>Card 5</div>
    </div>
  );
};
