import React from "react";
import { useState } from "react";
import "../styles/informacion.css";

const Informacion = () => {
  const general = [
    {
      title: "Duración",
      texto:
        "10 módulos de una sesión al mes el viernes por la mañana y por la tarde (9 horas) y el sábado  por la mañana (6 horas), con un total de 192 horas (224 horas) curriculares. De octubre 2022 a  septiembre 2023.  21 OCTUBRE 2022 (al inicio del semestre o se ira recorriendo hasta tener el cupo lleno)   ",
    },
    {
      title: "Modalidad",
      texto: "Presencial",
    },
    {
      title: "Dirigido a",
      texto:
        "Va a dirigido a todos Odonotologos que quieran seguir preperandose , por que sabemos el estudio es el camino .",
    },
    {
      title: "Objetivos",
      texto:
        "El objetivo del diplomado en la especialidad de Implantología quirúrgica protésica es el de capacitar al cirujano dentista en los conceptos teóricos y prácticos, para brindar una atención ética, de alta calidad y predictibilidad de una forma sencilla y segura en los tratamientos con implantes dentales. Este diplomado abordará los aspectos necesarios para poder diagnosticar y tratar casos de edentulismo parcial y total, así como proporcionar las bases de juicio para referir los casos más complejos al especialista y poder resolverlos multidisciplinariamente. El participante obtendrá los conocimientos y la destreza necesaria para incorporar la implantología a su práctica profesional.",
    },
    {
      title: "Requisitos",
      texto:
        "• Cumplir las horas de teoría, prácticas y clínicas de ambas especialidades",
      texto2:
        "• Publicar o tener carta de aceptación de la revista de un artículo por parejas antes de  terminar el diplomado",
      texto3: "• Colocar 2 implantes individuales",
      texto4: "• Colocar 2 implantes en parcialmente edéntulo ",
      texto5:
        "• Colocar 2 implantes que necesiten injerto óseo y remodelación gingival",
      texto6:
        " • Colocar 4 implantes en totalmente edéntulo con barra o 4 implantes en dos arcadas  para o rings ",
      texto7: "• Colocar 1 implante de carga inmediata  ",
      texto8: "• Restauración final de los casos  ",
      texto9: "• De implantes individuales",
      texto10: "  • De implantes parcialmente edéntulos ",
      texto11:
        "• De implantes que requieran de injerto óseo, o reposicionamiento gingival",
      texto12: "• De implantes de Carga Inmediata ",
      texto13: "  • De implantes totalmente edéntulos tratados con barra",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="container-general">
      <div className="title-general">
        <p>información general</p>
      </div>
      <div className="fecha-inicio">
        <p>fecha de inicio</p>
        <p>21 de octubre del 2022</p>
      </div>
      <div className="wraper">
        {general.map((item, i) => (
          <div className="item-acordeon">
            <div className="title-acordeon" onClick={() => toggle(i)}>
              <h5>{item.title}</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.texto}</p>
              <p>{item.texto2}</p>
              <p>{item.texto3}</p>
              <p>{item.texto4}</p>
              <p>{item.texto5}</p>
              <p>{item.texto6}</p>
              <p>{item.texto7}</p>
              <p>{item.texto8}</p>
              <p>{item.texto9}</p>
              <p>{item.texto10}</p>
              <p>{item.texto11}</p>
              <p>{item.texto12}</p>
              <p>{item.texto13}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informacion;
