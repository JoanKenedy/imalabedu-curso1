import React from "react";
import Img from "../img/hero.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={Img} alt="" className="img-hero" />
    </div>
  );
};

export default Hero;
