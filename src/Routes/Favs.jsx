import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Leer los favoritos desde el localStorage cuando el componente se monte
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const handleToggleFav = () => {
    // Actualiza los favoritos al modificarlos
    const updatedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(updatedFavs);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((doctor) => (
            <Card key={doctor.id} doctor={doctor} onToggleFav={handleToggleFav} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
