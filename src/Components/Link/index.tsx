import React from "react";
import styles from "./Link.module.css";

type LinkProps = {
  href: string;
};

const Link = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a {...props} className={styles.link}>
      {children}
    </a>
  );
};

export default Link;
