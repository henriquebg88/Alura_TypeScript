import React from "react";
import Styles from "./FieldSet.module.css";

type FieldsetProps = {
  variant?: "Primary" | "Secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet = ({ children, variant = "Primary" }: FieldsetProps) => {
  return;
  <fieldset
    className={`${Styles.inputWrapper} ${
      variant == "Primary" ? Styles.primary : Styles.secondary
    }`}
  >
    {children}
  </fieldset>;
};

export default FieldSet;
