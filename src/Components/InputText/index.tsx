import React from "react";
import Styles from "./InputText.module.css";

const InputText = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={Styles.input} {...props} />;
};

export default InputText;
