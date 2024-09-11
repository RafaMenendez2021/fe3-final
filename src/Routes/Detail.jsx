import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ContextGlobal from '../Components/utils/global.context';
import axios from 'axios';
import CardStyles from "../Styles/Card.module.css";
const imagenes = "/images"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [doctor, setDoctor] = useState({});
  const params = useParams();// Sirve para el axios Kim
  console.log(params);
  const { url } = useContext(ContextGlobal);
  const doctorURL = `${ url }/${params.id}`;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(()=>{
    axios(doctorURL)
    .then((res)=>{
      setDoctor(res.data);
    })
    .catch((err)=> console.log(err));
  }, [doctorURL]);
  return (
    <>
      <h1>Detail Dentist  {params.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <img src={`${imagenes}/doctor.jpg`} alt="Imagen doctor" className={CardStyles.cardImg}/>
      <div>
        <div dangerouslySetInnerHTML={{__html: doctor.name}}/>
        <div dangerouslySetInnerHTML={{__html: doctor.email}}/>
        <div dangerouslySetInnerHTML={{__html: doctor.phone}}/>
        <div dangerouslySetInnerHTML={{__html: doctor.website}}/>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;