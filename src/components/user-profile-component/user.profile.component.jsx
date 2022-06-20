import React from "react";
import { useUserContext } from "../../contexts/user.context";

const UserProfileData = () => {
  // const { user } = useContext(UserContext);
  const user = useUserContext();
  const userState = user.currentUser;

  if (userState) {
    const email = userState.email;
    const displayName = userState.displayName;
    const uid = userState.uid;
    const createdAt = userState.createdAt;
    console.log(userState);

    return (
      <div className="text-component-container">
        <p>
          <b>Your email:</b> {email}
        </p>
        <p>
          <b>Your name:</b> {displayName}
        </p>
        <p>
          <b>Your id:</b> {uid}
        </p>
        <p>
          <b>Account created:</b> {createdAt}
        </p>
      </div>
    );
  }
};

export default UserProfileData;
