import React, { useState, useEffect, useMemo, useContext } from "react";
import DinamicText from "../../components/dinamic-text/dinamic-text.componenet";
import AudioRecorder from "../../components/audio-recorder/audio-recorder.component.jsx";
import { getCurrentUserRecordings } from "../../utils/firebase/firebase.utils";
import { useFilesContext } from "../../contexts/files.context.jsx";
import { RecordingsContext } from "../../contexts/recordings.context";
import "./../../style.css";

const Record = () => {
  const filesMap = useFilesContext();
  const { recordingsMap, setRecordingsMap } = useContext(RecordingsContext);

  const [textId, setTextId] = useState(0);
  const [phrases, setPhrases] = useState([]);
  const [myState, setMyState] = useState("proverbs file");
  const [currentPhrase, setCurrentPhrase] = useState(null);

  useEffect(() => {
    const getRecordingsMap = async () => {
      const recordingMap = await getCurrentUserRecordings();
      setRecordingsMap(recordingMap);

      console.log("recordings from the BE: ", recordingMap);
    };
    getRecordingsMap();
  }, []);

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
      console.log("setting my phrases: ", myPhrases);
      setPhrases(myPhrases);
    }

    if (textId < phrases.length) {
      console.log("this is my current text id: ", textId);

      setCurrentPhrase(phrases[textId]);
    }
  }, [filesMap, textId, phrases, myPhrases]);

  const setNewText = () => {
    const nextId = textId + 1 < myPhrases.length ? textId + 1 : 0;
    setTextId(nextId);
  };

  return (
    <div className="page-container">
      <div className="section">
        <div className="row wc1">
          <div className="col c1">
            <p className="t-center">Click 'Record' then read the text aloud.</p>

            <div className="text-container">
              <DinamicText
                setMyState={setMyState}
                filesMap={filesMap}
                currentPhrase={currentPhrase}
                setNewText={setNewText}
                setTextId={setTextId}
              />
              <div className="text-container">
                {/* <Button 
                                className="t-center mt50">New Text</Button> */}
              </div>
            </div>

            <AudioRecorder currentPhrase={currentPhrase} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
