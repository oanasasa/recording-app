import React, { useContext } from "react";
import { useFilesContext } from "../../contexts/files.context";
import { RecordingsContext } from "../../contexts/recordings.context";
import { useUserContext } from "../../contexts/user.context";

const UserProfileData = () => {
  const { recordingsMap: recordings } = useContext(RecordingsContext);
  const filesMap = useFilesContext();
  console.log("this is the files map", filesMap);

  const userState = useUserContext();
  const { displayName, email, createdAt } = userState.userData;

  const filteredTextTypeRecordings = recordings.reduce((acc, recording) => {
    if (typeof acc[recording.textType] === "undefined") {
      acc[recording.textType] = [];
    }

    if (typeof acc[recording.textType] === "object") {
      acc[recording.textType].push(recording);
    }

    return acc;
  }, {});

  console.log("odered nicely recordings", filteredTextTypeRecordings);

  return (
    <div>
      <div className="text-component-container">
        <h2>Informations about your account.</h2>
        <p>
          <b>Your email:</b> {email ? email : ""}
        </p>
        <p>
          <b>Your name:</b> {displayName ? displayName : ""}
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
            console.log("dis the key", key);
            return (
              <div key={key} style={{ margin: "10px 0 0 0" }}>
                <p>{key.toUpperCase()}</p>
                <div>
                  {filteredTextTypeRecordings[key].map((recording) => {
                    console.log("the key is: ", key, "recording: ", recording);

                    const recordingText = filesMap.filesMap[key].filter(
                      (elem) => elem.id === recording.textId
                    )[0].text;

                    return (
                      <div key={`${recording.textType}-${recording.textId}`}>
                        <p>{recordingText}</p>
                        <audio controls>
                          <source src={recording.url} type="audio/ogg" />
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
