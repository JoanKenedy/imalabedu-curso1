import React from "react";
import Foto from "../img/foto.png";
import "../styles/texto.css";

const Texto = () => {
  return (
    <div className="container-text">
      <div className="item-text">
        <h2>DIPLOMADO DE IMPLANTOLOGÍA QUIRÚRGICO PROTÉSICO</h2>
        <img src={Foto} alt="" />
      </div>
      <div className="item-text">
        <h2>Descripción</h2>
        <p>
          El diplomado contará con 10 módulos, 1 por mes, en los cuales se
          tocarán temas relacionados tanto con la prótesis como con la cirugía
          relacionados al tratamiento para el paciente con implantes dentales.
        </p>
        <br />
        <p>
          Los participantes tendrán que acudir a todos los módulos y cumplir con
          los requisitos del diplomado para poder obtener su diploma y
          certificación.
        </p>
        <br />
        <p>
          Durante el transcurso de estos 10 módulos los participantes realizarán
          prácticas tanto en modelo simulado como en pacientes, prepararán por
          lo menos tres casos completos tanto en la parte quirúrgica como en la
          parte protésica, tendrán la oportunidad de realizar injertos óseos
          sencillos, restauraciones protésicas en el sector estético, así como
          si el caso lo permite, carga inmediata en el sector estético.
        </p>
        <br />
        <p>
          El diplomado es avalado por la SEP, pedir informes de cómo obtener la
          constancia avalada y con fotografía de la SEP.
        </p>
      </div>
    </div>
  );
};

export default Texto;
