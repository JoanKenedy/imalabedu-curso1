import React from "react";
import Reloj from "../img/reloj.png";
import Calendario from "../img/calendario.png";
import Play from "../img/play.png";
import Flag from "../img/flag.png";
import Time from "../img/time.png";
import Modulos from "../img/modulos.png";
import "../styles/iconos.css";
const Iconos = () => {
  const iconos = [
    {
      id: 1,
      imgSrc: Reloj,
      texto: "duración",
      fecha: "10 meses",
    },
    {
      id: 2,
      imgSrc: Calendario,
      texto: "registro final",
      fecha: "20/oct/2022",
    },
    {
      id: 3,
      imgSrc: Play,
      texto: "fecha inicio",
      fecha: "21/oct/2022",
    },
    {
      id: 4,
      imgSrc: Flag,
      texto: "fecha final",
      fecha: "23/sep/2023",
    },
    {
      id: 5,
      imgSrc: Time,
      texto: "tiempo",
      fecha: "224 hrs",
    },
    {
      id: 6,
      imgSrc: Modulos,
      texto: "módulos",
      fecha: "10 módulos",
    },
  ];
  return (
    <div className="container-icon">
      {iconos.map((icono, index) => (
        <div className="item-icono" key={index}>
          <img src={icono.imgSrc} alt="" />
          <h6>{icono.texto}</h6>
          <p>{icono.fecha}</p>
        </div>
      ))}
    </div>
  );
};

export default Iconos;
