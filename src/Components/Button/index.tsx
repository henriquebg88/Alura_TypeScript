import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...props }: ButtonProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon,
  };

  return (
    <button className={classNames(styles.botao, classMap[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
