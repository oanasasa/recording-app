import styles from "./footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack } from "../../assets/blue-back-logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.main_column}>
          <Link className="logo-container" to="/">
            <LogoBlack className="logo" />
          </Link>
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
              <a>
                <Link to="/account">My account</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/authentification">Register</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <p className={styles.pages_title}>Recordings</p>
          <ul className={styles.pages_list}>
            <li>
              <a>
                <Link to="/record">Record Now</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/account">My recordings</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/specs">Rules & Indications</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.subfooter}>
        <p>Copyright Play Your Voice.</p>
      </div>
    </div>
  );
};

export default Footer;
