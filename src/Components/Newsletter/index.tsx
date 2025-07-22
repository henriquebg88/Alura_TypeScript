import React from "react";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import Button from "../Button";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos</h2>
      <form className={styles.form}>
        <FieldSet>
          <InputText placeholder="digite o seu e-mail" />
        </FieldSet>
        <Button type="submit" variant="default">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
