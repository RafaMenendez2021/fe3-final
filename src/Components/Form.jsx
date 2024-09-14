import React from "react";
import FormStyles from "../Styles/Form.module.css";
import Register from "./Register";
import { useContextGlobal } from "./utils/global.context"; 

const Form = () => {
  const { state, handleInputChange, handleSubmit, reset } = useContextGlobal();  

  const formClassName = `${FormStyles.form} ${state.theme === 'dark' ? FormStyles.dark : FormStyles.light}`;

  return (
    <div className={formClassName}>
      {!state.showCard && (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={state.nombre}
            onChange={handleInputChange}
          />
          <label>Correo: </label>
          <input
            type="text"
            name="correo"
            value={state.correo}
            onChange={handleInputChange}
          />

          {state.error && (
            <h3 style={{ color: "red" }}>
              Por favor verifique su información nuevamente.
            </h3>
          )}

          <button type="submit">Enviar</button>
          <button type="button" onClick={reset}>Reset</button>
        </form>
      )}

      {state.showCard && <Register nombre={state.nombre} correo={state.correo} />}
    </div>
  );
};

export default Form;
