import React from "react";
import "../styles/navbar.css";
import Logo from "../img/logo-header.png";
import LogoFooter from "../img/logo-footer.png";

const Navbar = () => {
  return (
    <header>
      <div className="container-uno">
        <h1>
          <a href="https://imalabedu.com.mx/form-inscripcion/" target="_blank">
            Inscríbite al <br /> diplomado
          </a>
        </h1>
        <div className="logo">
          <img src={Logo} alt="" className="logouno" />
          <img src={LogoFooter} alt="" className="logodos" />
        </div>

        <div className="phone">
          <a href="tel:7712891983" target="_blank">
            (771) 289 0983
          </a>
          <a href="tel:7713875573" target="_blank">
            (771) 387 5573
          </a>
        </div>
      </div>
      <div className="container-uno">
        <p>¡últimos lugares disponibles!</p>
      </div>
    </header>
  );
};

export default Navbar;
