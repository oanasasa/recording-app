import React, { Fragment, useContext } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/logo-playYourVoice.svg";
import "./../../style.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const signOut = async () => {
    await signOutUser();

    navigate("/");
  };

  return (
    <Fragment>
      <div className="empty-section"></div>
      <div className="navigation">
        <div className="row wc2">
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            {currentUser ? (
              <div>
                <Fragment>
                  <Link className="nav-link" to="/record">
                    RECORD
                  </Link>
                  <Link className="nav-link my-account" to="/account">
                    ACCOUNT
                  </Link>
                  <Link className="nav-link my-account" to="/admin-pannel">
                    ADMIN
                  </Link>
                </Fragment>
                <span className="nav-link" onClick={signOut}>
                  SIGN OUT
                </span>
              </div>
            ) : (
              <Fragment>
                <Link className="nav-link" to="/authentification">
                  SIGN IN
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
