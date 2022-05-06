import React, { useState } from "react";
import styles from "./main.module.css";
import ListarPeliculas from "../components/ListarPeliculas";

function Main() {
  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(!false);
  };

  const cerrarModal = () => {
    setModal(!modal);
  };
  return (
    <div className={styles.mainContainer}>
        
      <h2>Acá van ir los personajes, papáA</h2>
      <div className={styles.cardsContainer}>
      <button onClick={abrirModal}>abrir PERSONAJES</button>
        {/* No sé cómo meter un setTimeOut acá */}
        {modal && (
          <div>
            <button onClick={cerrarModal}>cerrar PERSONAJES</button>
            <ListarPeliculas />
          </div>
        )}
      </div>
    </div>
  );
}
export default Main;
