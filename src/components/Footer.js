import React from "react";
import LogoFooter from "../img/logo-footer.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="item-footer">
        <img src={LogoFooter} alt="" />
        <p>" Nuestra misión es... Tu Educación. "</p>
      </div>
      <div className="item-footer">
        <p>
          Desarrollado por
          <a
            href="https://dentarios.com.mx
"
            target="_blank"
          >
            Agencia de Marketing Dentarios.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
