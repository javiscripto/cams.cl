import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const navItems = [
    { name: "HOME", path: "" },
    { name: "GALERIA", path: "galeria" },
    { name: "SOBRE MI", path: "about" },
    { name: "CONTACTO", path: "contacto" },
  ];

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img className={styles.logo} src="/fav.png" alt="logo" />
        </NavLink>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink to="">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="galeria">GALERIA</NavLink>
        </li>
        <li>
          <NavLink to="about">SOBRE MI</NavLink>
        </li>
        <li>
          <NavLink to="contacto">CONTACTO</NavLink>
        </li>
      </ul>
    </nav>
  );
};
