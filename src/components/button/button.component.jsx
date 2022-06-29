import "./../../style.css";
import React from "react";
import styles from "./button.module.css";

const Button = React.forwardRef(
  ({ children, buttonType, ...otherProps }, ref) => {
    return (
      <button ref={ref} className={styles.btn} {...otherProps}>
        {children}
      </button>
    );
  }
);

export default Button;
