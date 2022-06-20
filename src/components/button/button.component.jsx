import "./../../style.css";
import React from "react";
import styles from "./button.module.css";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  scrollTo: "btn-get-started scrollto",
};

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
