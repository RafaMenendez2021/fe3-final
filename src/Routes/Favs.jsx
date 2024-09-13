import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import styles from "../Styles/Favs.module.css";

const Favs = () => {
  const { state } = useContextGlobal(); // Asegúrate de que el estado del tema se obtenga correctamente

  return (
    <div className={styles.favoritos}>
      <div className={styles.cardGrid}>
        {state.favs.length > 0 ? (
          state.favs.map((doctor) => (
            <Card key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
