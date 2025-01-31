//importo itemlistcategory.module.css
import styles from "./itemlistcategory.module.css";
import { Link } from "react-router-dom";

export const ItemlistCategory = () => {
  const categorias = [
    {
      categoria: "embarazo",
      img: "/imgs/embarazo1.webp",
      descripcion: "lorem ipsum ipsumito lorito",
    },
    {
      categoria: "mascotas",
      img: "/imgs/mascota9.webp",
      descripcion: "lorem lorem mascota 9",
    },
    {
      categoria: "sesiones",
      img: "/imgs/sesion1_1.webp",
      descripcion: "lorem lorem sesiones",
    },
  ];
  return (
    <div className="container">
      <h2>Te invito a ver mis obras </h2>
      <p>
        Soy una artista visual apasionada especializada en la creación de obras
        únicas que retratan momentos especiales, personas especiales y mascotas
        a travez de diversas técnicas.
      </p>
      <div className={styles.cardContainer}>
        {categorias.map((item, index) => (
          <Link key={index} to={`/galeria/${item.categoria}`}>
            <div className={styles.card}>
              <h3>{item.categoria}</h3>
              <p>{item.descripcion}</p>
              <img src={item.img} alt={item.categoria} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
