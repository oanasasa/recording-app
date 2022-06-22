import React, { useContext } from "react";
import { useUserContext } from "../../contexts/user.context";

const UserProfileData = () => {
  // const { recordingsMap } = useContext(RecordingsContext);

  // console.log(recordingsMap);
  const userState = useUserContext();

  // console.log("user data from the user profile", userState.userData);

  // return null;

  const { displayName, email, createdAt } = userState.userData;

  if (userState.userData) {
    return (
      <div>
        <div className="text-component-container">
          <h2>Informations about your account.</h2>
          <p>
            <b>Your email:</b> {email}
          </p>
          <p>
            <b>Your name:</b> {displayName}
          </p>
          {/* todo: 
            convert createdAt to local time
          */}
          {/* <p><b>Your name:</b> {createdAt}</p> */}
        </div>
        <div className="text-component-container">
          <h2>Your records.</h2>
          <div>
            {/* {Object.keys(recordingsMap).map((url, index) => (
              <audio key={`type=${index}`}>
                <source src={recordingsMap.url} type="audio/ogg " />
              </audio>
            ))} */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserProfileData;
