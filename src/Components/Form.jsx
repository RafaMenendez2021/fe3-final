import React, { useState } from "react";
import FormStyles from "../Styles/Form.module.css";
import Register from "./Register";
import { useContextGlobal } from "./utils/global.context";  // Importa el contexto global

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const { state } = useContextGlobal();  // Obtén el estado del tema

  const handleSubmit = (e) => {
    e.preventDefault();
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nombreRegex = /^[a-zA-Z\s]+$/;

    if (
      nombre.trim().length > 5 &&
      nombreRegex.test(nombre) &&
      correoRegex.test(correo)
    ) {
      setShowCard(true);
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  const reset = () => {
    setNombre("");
    setCorreo("");
    setError(false);
    setShowCard(false);
  };

  // Aplica la clase de tema con base en el estado del tema
  const formClassName = `${FormStyles.form} ${state.theme === 'dark' ? FormStyles.dark : FormStyles.light}`;

  return (
    <div className={formClassName}>
      {!showCard && (
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

          {error && (
            <h3 style={{ color: "red" }}>
              Por favor verifique su información nuevamente.
            </h3>
          )}

          <button type="submit">Enviar</button>
          <button type="button" onClick={reset}>Reset</button>
        </form>
      )}

      {showCard && <Register nombre={nombre} correo={correo} />}
    </div>
  );
};

export default Form;
