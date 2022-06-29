import React, { useState, useEffect, useMemo, useContext } from "react";
import DinamicText from "../../components/dinamic-text-component/dinamic-text.componenet";
import AudioRecorder from "../../components/audio-recorder-component/audio-recorder.component.jsx";
import { useFilesContext } from "../../contexts/files.context.jsx";
import { RecordingsContext } from "../../contexts/recordings.context";
import Footer from "../../components/footer-component/footer.component";
import "./../../style.css";

const Record = () => {
  const filesMap = useFilesContext();
  const { recordingsMap } = useContext(RecordingsContext);

  const [textId, setTextId] = useState(0);
  const [phrases, setPhrases] = useState([]);
  const [myState, setMyState] = useState("advices file");
  const [currentPhrase, setCurrentPhrase] = useState(null);

  const myStateBasedRecordsIds = useMemo(
    () =>
      recordingsMap.reduce((acc, elem) => {
        if (elem.textType === myState) {
          acc.push(elem.textId);
        }

        return acc;
      }, []),
    [recordingsMap, myState]
  );

  const myPhrases = useMemo(() => {
    const asdfg = filesMap.filesMap[myState];

    if (asdfg) {
      return asdfg.filter(
        (fraze) => !myStateBasedRecordsIds.includes(fraze.id)
      );
    } else {
      return [];
    }
  }, [filesMap, myState, myStateBasedRecordsIds]);

  useEffect(() => {
    if (textId + 1 > myPhrases.length) {
      setTextId(myPhrases.length - 1);
    }
  }, [myPhrases, textId]);

  useEffect(() => {
    if (filesMap && Object.keys(filesMap.filesMap).length > 0) {
      setPhrases(myPhrases);
    }

    if (textId < phrases.length) {
      setCurrentPhrase(phrases[textId]);
    }
  }, [filesMap, textId, phrases, myPhrases]);

  const setNewText = () => {
    const nextId = textId + 1 < myPhrases.length ? textId + 1 : 0;
    setTextId(nextId);
  };

  return (
    <div className="page-container">
      <div className="section record">
        <div className="row wc1">
          <div className="col c1">
            <p className="t-center instructions-text">
              Start by choosing the category of the <b>file text</b>. Click the{" "}
              <b>'Record' icon</b> then read the text aloud. Stop the recording
              after reading and when you are ready press <b>'Submit'</b>.
            </p>

            <div className="text-container">
              <DinamicText
                setMyState={setMyState}
                filesMap={filesMap}
                currentPhrase={currentPhrase}
                setNewText={setNewText}
                setTextId={setTextId}
              />
            </div>

            <AudioRecorder currentPhrase={currentPhrase} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Record;
