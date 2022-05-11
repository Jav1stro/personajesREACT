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
        
      {/* <img src={'./personajes.png'}></img> */}
      <h1>Personajes</h1>
      <div className={styles.cardsContainer}>
      <button onClick={abrirModal}>abrir PERSONAJES</button>
        {/* No sé cómo meter un setTimeOut acá */}
        {modal && (
          <div>
           
            <ListarPeliculas />
            <button onClick={cerrarModal}>cerrar PERSONAJES</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Main;
