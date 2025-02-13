import { useState } from "react";
import styles from "./itemlistcategory.module.css";
import { Link } from "react-router-dom";
import { Loader } from "./loader";

export const ItemlistCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setloadedImages] = useState(0);

  const categorias = [
    {
      categoria: "embarazo",
      img: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/embarazo1.webp",
      descripcion: "lorem ipsum ipsumito lorito",
    },
    {
      categoria: "mascotas",
      img: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/mascota9.webp",
      descripcion: "lorem lorem mascota 9",
    },
    {
      categoria: "sesiones",
      img: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/sesion1_1.webp",
      descripcion: "lorem lorem sesiones",
    },
    {
      categoria: "eventos",
      img: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/evento1.webp",
      descripcion: "lorem lorem eventos",
    },
    {
      categoria: "productos",
      img: "https://cdn.jsdelivr.net/gh/javiscripto/cams-images/producto1.webp",
      descripcion: "lorem lorem productos",
    },
  ];

  const handleIncrementCountImages = () => {
    setloadedImages((prevLoadedImages) => {
      const newLoadedImages = prevLoadedImages + 1; // Incrementa el contador

      // Verifica si todas las imágenes están cargadas
      if (newLoadedImages === categorias.length) {
        setIsLoading(false);
      }

      return newLoadedImages; // Devuelve el nuevo valor
    });
  };

  return (
    <div className="container">
      <h2>Te invito a ver mis obras</h2>
      <p>
        Soy una artista visual apasionada especializada en la creación de obras
        únicas que retratan momentos especiales, personas especiales y mascotas
        a través de diversas técnicas.
      </p>

      {isLoading && <Loader num={(loadedImages * 100) / categorias.length} />}
      <div className={styles.cardContainer}>
        {categorias.map((item, index) => (
          <Link key={index} to={`/galeria/${item.categoria}`}>
            <div className={styles.card}>
              <h3>{item.categoria}</h3>
              <p>{item.descripcion}</p>
              <img
                loading="lazy"
                onLoad={handleIncrementCountImages} // Llama a la función cuando la imagen se carga
                src={item.img}
                alt={item.categoria}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
