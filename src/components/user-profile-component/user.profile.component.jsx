import React, { useContext } from "react";
import { useFilesContext } from "../../contexts/files.context";
import { RecordingsContext } from "../../contexts/recordings.context";
import { useUserContext } from "../../contexts/user.context";

const UserProfileData = () => {
  console.log("blblbllb");
  const { recordingsMap: recordings } = useContext(RecordingsContext);

  console.log("blblbllb2");
  const filesMap = useFilesContext();

  console.log("blblbllb3");
  const userState = useUserContext();

  console.log(userState);
  console.log(userState.userData);

  const { displayName, email } = userState.userData;

  console.log("blblbllb5");

  const filteredTextTypeRecordings = recordings.reduce((acc, recording) => {
    if (typeof acc[recording.textType] === "undefined") {
      acc[recording.textType] = [];
    }

    if (typeof acc[recording.textType] === "object") {
      acc[recording.textType].push(recording);
    }

    return acc;
  }, {});

  return (
    <div>
      <div className="text-component-container">
        <h2>Informations about your account.</h2>
        <p>
          <span>Your email:</span> {email ? email : ""}
        </p>
        <p>
          <span>Your name:</span> {displayName ? displayName : ""}
        </p>
        {/* todo: 
            convert createdAt to local time
          */}
        {/* <p><b>Your name:</b> {createdAt}</p> */}
      </div>
      <div className="text-component-container">
        <h2>Your records.</h2>
        <div>
          {Object.keys(filteredTextTypeRecordings).map((key) => {
            return (
              <div key={key} style={{ margin: "10px 0 0 0" }}>
                <p>{key.toUpperCase()}</p>
                <div>
                  {filteredTextTypeRecordings[key].map((recording) => {
                    const recordingText = filesMap.filesMap[key].filter(
                      (elem) => elem.id === recording.textId
                    )[0].text;

                    return (
                      <div key={`${recording.textType}-${recording.textId}`}>
                        <p>{recordingText}</p>
                        <audio controls>
                          <source src={recording.url} type="audio/mp3" />
                        </audio>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfileData;
