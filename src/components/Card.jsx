import React from "react";
import styles from "../css.modules/card.module.css";

function Card({ id, nickname, length}) {
  return (
    <div className={styles.card}>
      <h6>{id}</h6>
      <h5>{nickname}</h5>
      <p>{length}</p>
    </div>
  );
}

export default Card;
