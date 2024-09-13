import React from 'react';
import Form from '../Components/Form';
import FormStyles from "../Styles/Form.module.css";
import { useContextGlobal } from "../Components/utils/global.context" 


const Contact = () => {
  const { state } = useContextGlobal();

  // Aplicar la clase dark o light dependiendo del theme
  const containerClassName = `${FormStyles.information} ${state.theme === 'dark' ? FormStyles.dark : FormStyles.light}`;

  return (
    <div className={containerClassName}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
}

export default Contact;
