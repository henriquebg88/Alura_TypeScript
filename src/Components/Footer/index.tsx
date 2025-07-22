import React from "react";
import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
      </div>
    </footer>
  );
};

export default Footer;
