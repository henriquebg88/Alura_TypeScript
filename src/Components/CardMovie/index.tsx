import React from "react";
import Styles from "./CardMovie.module.css";
import Tag from "../Tag";
import type { Movie } from "../../Types";

const CardMovie = (props: Movie) => {
  const { src, alt, titulo, genero, categoria, duracao, censura } = props;
  return (
    <li className={Styles.card}>
      <img src={src} alt={alt}></img>
      <div className={Styles.container}>
        <h3>{titulo}</h3>
        <div className={Styles.informacoes}>
          <div className={Styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={Styles.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
