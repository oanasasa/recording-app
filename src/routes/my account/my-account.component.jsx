import React from "react";
import Footer from "../../components/footer-component/footer.component";
import UserProfileData from "../../components/user-profile-component/user.profile.component";
import "./../../style.css";

const MyAccount = () => {
  return (
    <div className="page-container">
      <div className="section my-account">
        <div className="row c1">
          <div className="c1">
            <h1>Your information and recordings:</h1>
          </div>
        </div>
        <div className="row c1">
          <div className="c1 user-infos">
            <UserProfileData />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
