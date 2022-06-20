import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.main_column}>
          <img className={styles.logo} src="images/logo-playYourVoice.svg" />
          <div className={styles.description}>
            <h4 className="">Check our functionality</h4>
            <p className="">
              Accusantium quam, aliquam ultricies eget tempor id.
            </p>
          </div>
        </div>
        <div className="">
          <p className={styles.pages_title}>Clients</p>
          <ul className={styles.pages_list}>
            <li>
              <a>My account</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Register</a>
            </li>
          </ul>
        </div>
        <div className="">
          <p className={styles.pages_title}>Recordings</p>
          <ul className={styles.pages_list}>
            <li>
              <a>Record Now</a>
            </li>
            <li>
              <a>My recordings</a>
            </li>
            <li>
              <a>Rules & Indications</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.subfooter}>Copyright oana 2023.</div>
    </div>
  );
};

export default Footer;
