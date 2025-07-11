import React from "react";
import styles from "./Tag.module.css";
import classNames from "classnames";

type Categoria = "2D" | "3D";
type Censura = "10 anos" | "12 anos" | "14 anos" | "16 anos" | "2D" | "3D";

interface Tag extends React.HTMLAttributes<HTMLSpanElement> {
  value: Categoria | Censura;
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({ value }: Tag) => {
  const classes = classNames(styles.tag, tagClasses[value]);

  return <span className={classes}>{value}</span>;
};

export default Tag;
