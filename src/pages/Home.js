import React from "react";
import Descarga from "../components/Descarga";
import Docente from "../components/Docente";
import Hero from "../components/Hero";
import Iconos from "../components/Iconos";
import Informacion from "../components/Informacion";
import Texto from "../components/Texto";

const Home = () => {
  return (
    <div>
      <Hero />
      <Iconos />
      <Descarga />
      <Texto />
      <Docente />
      <Informacion />
    </div>
  );
};

export default Home;
