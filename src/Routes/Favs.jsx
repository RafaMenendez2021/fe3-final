import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import styles from "../Styles/Card.module.css";

const Favs = () => {
  const { state } = useContextGlobal(); // Obtenemos los favs del contexto global

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((doctor) => (
            <Card key={doctor.id} doctor={doctor} className={styles.cardContainer}/>
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
