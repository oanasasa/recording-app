import styles from "./footer.module.css";
import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack } from "../../assets/blue-back-logo.svg";
import { UserContext } from "../../contexts/user.context";

const Footer = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.main_column}>
          <Link className="logo-container" to="/">
            <LogoBlack className="logo" />
          </Link>
          <div className={styles.description}>
            <h4>The most amazing recording app.</h4>
            <p>Made for expanding technology with voice functionality.</p>
          </div>
        </div>
        <div className="">
          <p className={styles.pages_title}>Clients</p>
          <ul className={styles.pages_list}>
            {currentUser ? (
              <Fragment>
                <li>
                  <Link className="nav-link" to="/account">
                    My account
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link className="nav-link" to="/authentification">
                    My account
                  </Link>
                </li>
              </Fragment>
            )}
            <li>
              <Link to="/authentification">Register</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className={styles.pages_title}>Recordings</p>
          <ul className={styles.pages_list}>
            {currentUser ? (
              <Fragment>
                <li>
                  <Link to="/record">Record Now</Link>
                </li>
                <li>
                  <Link to="/account">My recordings</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="/authentification">Record Now</Link>
                </li>
                <li>
                  <Link to="/authentification">My recordings</Link>
                </li>
              </Fragment>
            )}
            <li>
              <Link to="/tips">Rules & Indications</Link>
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
