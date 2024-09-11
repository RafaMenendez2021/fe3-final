import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);
  //const { state } = useContextGlobal(); // Suponiendo que el contexto puede tener datos que necesitas

  useEffect(() => {
    // Leer los favoritos desde el localStorage cuando el componente se monte
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((doctor) => (
            <Card key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
