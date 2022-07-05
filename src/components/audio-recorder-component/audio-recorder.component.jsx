import React, { useRef, useContext } from "react";
import { upload } from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";
import { RecordingsContext } from "../../contexts/recordings.context";
import { getCurrentUserRecordings } from "../../utils/firebase/firebase.utils";
import styles from "./../../components/button/button.module.css";

//componenta audio
const AudioRecorder = ({ currentPhrase }) => {
  const stopBtnRef = useRef(null);
  const storedAudioRef = useRef(null);

  const { setRecordingsMap } = useContext(RecordingsContext);
  //încărcare înregistrări
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

    //implementare getUserMedia pentru browserele vechi
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
        <div className="controls-audio">
          <div className="record-active-container">
            <Button
              type="button"
              className="button-container record-button"
              id="btnStart"
              onClick={requestPermision}
            >
              <div className="wave-boxContainer">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"></div>
              </div>
            </Button>
          </div>

          <Button
            ref={stopBtnRef}
            type="button"
            className="stop-button"
            id="btnStop"
          >
            {" "}
          </Button>
        </div>
      </div>
      <div className="audio-container">
        <audio controls ref={storedAudioRef} id="storedAudio"></audio>
        <Button
          type="button"
          className={`${styles.btn} ${styles.submit}`}
          id="btnStart"
          onClick={uploadRecording}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AudioRecorder;
