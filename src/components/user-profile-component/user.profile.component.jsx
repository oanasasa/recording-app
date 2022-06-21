import React from "react";
import { useUserContext } from "../../contexts/user.context";

const UserProfileData = () => {
  // const { user } = useContext(UserContext);
  const userState = useUserContext();

  if (userState) {
    return (
      <div className="text-component-container">
        <p>
          <b>Your email:</b> {userState.usersMap[0]}
        </p>
        <p>
          <b>Your name:</b> {userState.usersMap[1]}
        </p>
      </div>
    );
  }
};

export default UserProfileData;
