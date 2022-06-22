import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import UserProfileData from "../../components/user-profile-component/user.profile.component";
import "./../../style.css";

const MyAccount = () => {
  return (
    <div className="page-container">
      <h1>Your Recordings and information:</h1>
      <UserProfileData />
    </div>
  );
};

export default MyAccount;
