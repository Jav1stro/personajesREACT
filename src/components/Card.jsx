import React from "react";
import styles from "../css.modules/card.module.css";

function Card({ id, nickname, occupation}) {
  return (
    <div className={styles.card}>
      <h4>{id}</h4>
      <h1 className={styles.occupation}>{nickname}</h1>
      <p className={styles.occupation}>{occupation}</p>
    </div>
  );
}

export default Card;
