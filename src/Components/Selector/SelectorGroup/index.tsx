import React from "react";
import styles from "./SelectorGroup.module.css";

interface ISelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ icon, children, ...props }: ISelectorGroup) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...props}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGroup;
