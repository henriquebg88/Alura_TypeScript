import React from "react";
import styles from "./Footer.module.css";

const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
      <h4 className={styles.titulo}>Funcionamento</h4>
      <span>Segunda a Sexta - 16h às 00h</span>
      <span>Teste@gmail.com</span>
      <span>0800 098 000</span>
    </div>
  );
};

export default FooterInfo;
