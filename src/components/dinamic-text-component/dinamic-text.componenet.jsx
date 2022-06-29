import React from "react";
import Button from "../button/button.component";

const DinamicText = ({
  setMyState,
  filesMap,
  currentPhrase,
  setNewText,
  setTextId,
}) => {
  return (
    <div className="file-text-container">
      <div className="files-container">
        <h1 id="currentPhrase">
          {currentPhrase
            ? currentPhrase.text
            : "You have recorded all phrases of this type. Please select another phrase type in order to continue recording."}
        </h1>
        <div className="controls-text">
          <select
            className="title"
            onChange={(e) => {
              setMyState(e.target.value);
              setTextId(0);
            }}
            defaultValue="proverbs file"
          >
            {Object.keys(filesMap.filesMap).map((p, index) => (
              <option key={`type=${index}`} value={p}>
                {p}
              </option>
            ))}
          </select>

          <Button
            buttonType="inverted"
            onClick={setNewText}
            disabled={!currentPhrase}
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DinamicText;
