import React from "react";
import { Link } from "react-router-dom";
import CardStyles from "../Styles/Card.module.css";
import { useDoctorsStates } from "./utils/global.context";
const imagenes = "/images"

const Card = ({ doctor }) => {
  const {dispatch} = useDoctorsStates();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={"/detail/"+doctor.id}>
        <div className="card-content">
          <img src={`${imagenes}/doctor.jpg`} alt="Imagen doctor" className={CardStyles.cardImg}/>
          <h3>{doctor.name}</h3>
          <h4>{doctor.username}</h4>
        </div>
      </Link>      
      {/* Botón para agregar a favoritos, con su funcionalidad independiente */}
      <button onClick={()=>dispatch({type: "ADD_FAVS", payload: doctor})}>⭐</button>
    </div>
  );
};

export default Card;
