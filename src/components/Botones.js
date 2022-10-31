import React from "react";
import "../styles/botones.css";
import Whatsapp from "../img/whatsapp.png";
import Telefono from "../img/phone.png";

const Botones = () => {
  return (
    <div className="container-flotantes">
      <div>
        <a href="https://wa.me/527712891983" target="_blank">
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <div>
        <a href="tel:tel:7712891983" target="_blank">
          <img src={Telefono} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Botones;
