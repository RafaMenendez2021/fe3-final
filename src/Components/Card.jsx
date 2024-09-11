import React from "react";
import { Link } from "react-router-dom";
import CardStyles from "../Styles/Card.module.css";
import { useContextGlobal } from "./utils/global.context";
const imagenes = "/images";

const Card = ({ doctor, onToggleFav }) => {
  const { state, dispatch } = useContextGlobal();

  const toggleFav = () => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    const isAlreadyFav = storedFavs.some((fav) => fav.id === doctor.id);

    if (isAlreadyFav) {
      const newFavs = storedFavs.filter((fav) => fav.id !== doctor.id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      dispatch({ type: "REMOVE_FAVS", payload: doctor.id });
      alert(`Has quitado al doctor ${doctor.name} de favoritos`);
    } else {
      const newFavs = [...storedFavs, doctor];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      dispatch({ type: "ADD_FAVS", payload: doctor });
      alert(`Has agregado al doctor ${doctor.name} a favoritos`);
    }

    // Llama al callback para actualizar la lista de favoritos en Favs.jsx
    if (onToggleFav) {
      onToggleFav();
    }
  };

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={"/detail/" + doctor.id}>
        <div className="card-content">
          <img
            src={`${imagenes}/doctor.jpg`}
            alt="Imagen doctor"
            className={CardStyles.cardImg}
          />
          <h3>{doctor.name}</h3>
          <h4>{doctor.username}</h4>
        </div>
      </Link>
      <button onClick={toggleFav}>⭐</button>
    </div>
  );
};

export default Card;
