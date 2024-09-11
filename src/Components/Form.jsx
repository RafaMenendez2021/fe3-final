import React, { useState } from "react";
import FormStyles from "../Styles/Form.module.css";
import Register from "./Register";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nombreRegex = /^[a-zA-Z\s]+$/;

    if (
      nombre.trim().length > 5 &&
      nombreRegex.test(nombre) &&
      correoRegex.test(correo)
    ) {
      setShowCard(true); // Muestra el componente Register
      setError(false); // Asegúrate de que no hay error
    } else {
      setError(true); // Muestra el mensaje de error si falla la validación
      setShowCard(false); // Asegúrate de que no se muestre el componente Register
    }
  };

  const reset = () => {
    setNombre("");
    setCorreo("");
    setError(false);
    setShowCard(false);
  };

  return (
    <div>
      {!showCard && ( // Oculta el formulario si showCard es true
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label>Correo: </label>
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          {/* Mensaje de error entre los campos y los botones */}
          {error && (
            <h3 style={{ color: "red" }}>
              Por favor verifique su información nuevamente.
            </h3>
          )}

          <button type="submit">Enviar</button>
          <button type="button" onClick={reset}>Reset</button>
        </form>
      )}

      {/* Mostrar el componente Register si showCard es true */}
      {showCard && <Register nombre={nombre} correo={correo} />}
    </div>
  );
};

export default Form;
