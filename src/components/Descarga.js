import React, { useState } from "react";
import PDF from "../pdf/temario.pdf";
import "../styles/descarga.css";
import emailjs from "@emailjs/browser";

const Descarga = () => {
  const [modal, setModal] = useState(false);
  const modalPdf = () => {
    setModal(!modal);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("sharon", "template_ozi6983", event.target, "RGS5NrstxG7vf6h22")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-download" onClick={() => modalPdf()}>
        <p> descarga el temario aquí</p>
      </div>
      <div className={modal ? "modal open" : "modal"}>
        <div className="container-form">
          <div className="title-form">
            <p>Accede al folleto completo</p>
            <i
              className="fa-solid fa-xmark cerrar"
              onClick={() => setModal(false)}
            ></i>
          </div>
          <form action="" onSubmit={sendEmail}>
            <p>
              Por favor, para acceder el dossier completo de este curso
              universitario necesitamos que antes se identifique
            </p>
            <input type="text" placeholder="Nombre completo" name="user_name" />
            <input
              type="email"
              placeholder="Correo electronico"
              name="user_email"
            />
            <input type="tel" placeholder="Número teléfonico" name="phone" />
            <button type="submit" value="enviar">
              <a href={PDF} target="_blank">
                Enviar
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Descarga;
