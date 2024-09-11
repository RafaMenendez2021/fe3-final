import React from "react";
import { Link } from "react-router-dom";
import CardStyles from "../Styles/Card.module.css";
import { useContextGlobal } from "./utils/global.context";
const imagenes = "/images";

const Card = ({ doctor }) => {
  const { state, dispatch } = useContextGlobal();

  const toggleFav = () => {
    // Obtener los favoritos actuales del localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];

    // Verificar si el doctor ya está en favoritos
    const isAlreadyFav = storedFavs.some((fav) => fav.id === doctor.id);

    if (isAlreadyFav) {
      // Si el doctor ya está en favoritos, eliminarlo
      const newFavs = storedFavs.filter((fav) => fav.id !== doctor.id);
      localStorage.setItem("favs", JSON.stringify(newFavs));

      // Despachar la acción para eliminar de favoritos
      dispatch({ type: "REMOVE_FAVS", payload: doctor.id });

      // Mostrar el alert de eliminación
      alert(`Has quitado al doctor ${doctor.name} de favoritos`);
    } else {
      // Si no está en favoritos, agregarlo
      const newFavs = [...storedFavs, doctor];
      localStorage.setItem("favs", JSON.stringify(newFavs));

      // Despachar la acción para agregar a favoritos
      dispatch({ type: "ADD_FAVS", payload: doctor });

      // Mostrar el alert de agregado
      alert(`Has agregado al doctor ${doctor.name} a favoritos`);
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
      {/* Botón para agregar o quitar de favoritos */}
      <button onClick={toggleFav}>⭐</button>
    </div>
  );
};

export default Card;
