import React, { useRef, useContext } from "react";
import { upload } from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";
import { RecordingsContext } from "../../contexts/recordings.context";
import { getCurrentUserRecordings } from "../../utils/firebase/firebase.utils";

const AudioRecorder = ({ currentPhrase }) => {
  const stopBtnRef = useRef(null);
  const storedAudioRef = useRef(null);

  const { setRecordingsMap } = useContext(RecordingsContext);

  const uploadRecording = async () => {
    const blob = await fetch(storedAudioRef.current.src).then((r) => r.blob());
    await upload(currentPhrase.id, currentPhrase.textType, blob);

    const recordingMap = await getCurrentUserRecordings();
    setRecordingsMap(recordingMap);
  };

  const requestPermision = () => {
    let constraintObj = {
      audio: true,
    };

    //handle older browsers that might implement getUserMedia in some way
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
      navigator.mediaDevices.getUserMedia = function (constraintObj) {
        let getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraintObj, resolve, reject);
        });
      };
    }

    navigator.mediaDevices
      .getUserMedia(constraintObj)
      .then(function (mediaStreamObj) {
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let chunks = [];

        mediaRecorder.start();
        console.log(mediaRecorder.state);

        stopBtnRef.current.addEventListener("click", (ev) => {
          switch (mediaRecorder.state) {
            case "inactive":
              break;
            case "recording":
              mediaRecorder.stop();
              break;
            case "paused":
              mediaRecorder.stop();
              break;
            default:
              break;
          }
        });
        mediaRecorder.ondataavailable = function (ev) {
          chunks.push(ev.data);
        };
        mediaRecorder.onstop = (ev) => {
          let blob = new Blob(chunks, { type: "audio/mp3;" });
          chunks = [];
          let audioURL = window.URL.createObjectURL(blob);
          storedAudioRef.current.src = audioURL;
        };
      })
      .catch(function (err) {
        console.log(err.name, err.message);
      });
  };

  return (
    <div>
      <div className="buttons-container">
        <Button
          type="button"
          className="button-container record-button"
          id="btnStart"
          onClick={requestPermision}
        >
          Record
        </Button>
        <Button
          ref={stopBtnRef}
          type="button"
          className="button-container stop-button"
          id="btnStop"
        >
          {" "}
          Stop{" "}
        </Button>
        <Button
          type="button"
          className="button-container record-button"
          id="btnStart"
          onClick={uploadRecording}
        >
          Submit
        </Button>
      </div>
      <div className="audio-container">
        <audio controls ref={storedAudioRef} id="storedAudio"></audio>
      </div>
    </div>
  );
};

export default AudioRecorder;
