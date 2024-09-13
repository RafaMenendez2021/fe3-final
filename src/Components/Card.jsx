import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Card.module.css";
import { useContextGlobal } from "./utils/global.context";

const imagenes = "/images";

const Card = ({ doctor }) => {
  const { state, toggleFav, isAlreadyFav } = useContextGlobal();
  const isFav = isAlreadyFav(doctor);

  // Aplicar clases basadas en el estado del tema
  const cardClassName = `${styles.cardContainer} ${state.theme === 'dark' ? styles.dark : styles.light}`;

  return (
    <div className={cardClassName}>
      <Link to={"/detail/" + doctor.id}>
        <div className="card-content">
          <img
            src={`${imagenes}/doctor.jpg`}
            alt="Imagen doctor"
            className={styles.cardImg}
          />
          <h3>{doctor.name}</h3>
          <h4>{doctor.username}</h4>
        </div>
      </Link>
      <button onClick={() => toggleFav(doctor)}>
        {isFav ? "⭐" : "✨"}
      </button>
    </div>
  );
};

export default Card;
