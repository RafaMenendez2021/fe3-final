import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ContextGlobal from '../Components/utils/global.context';
import styles from "../Styles/Card.module.css";
const imagenes = "/images"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const params = useParams();// Sirve para el axios Kim
  console.log(params);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const doctor =state.doctors.find((doc)=> doc.id === parseInt(params.id));
  return (
    <>
      <h1>Detail Dentist  {params.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className={styles.container}>
        <img src={`${imagenes}/doctor.jpg`} alt="Imagen doctor" className={styles.cardImg} />
        <div className={styles.cardContent}>
          <div><strong>Name:</strong> {doctor.name}</div>
          <div><strong>Email:</strong> {doctor.email}</div>
          <div><strong>Phone:</strong> {doctor.phone}</div>
          <div><strong>Website:</strong> {doctor.website}</div>
        </div>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;