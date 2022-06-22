import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUserRecordings } from "../utils/firebase/firebase.utils";
import { useUserContext } from "./user.context";

export const RecordingsContext = createContext({
  recordingsMap: [],
  setRecordingsMap: () => {},
});

export const RecordingsProvider = ({ children }) => {
  const [recordingsMap, setRecordingsMap] = useState([]);

  const { currentUser } = useUserContext();

  useEffect(() => {
    const getRecordingsMap = async () => {
      const recordingMap = await getCurrentUserRecordings();
      setRecordingsMap(recordingMap);
    };
    getRecordingsMap();
  }, [currentUser]);

  return (
    <RecordingsContext.Provider value={{ recordingsMap, setRecordingsMap }}>
      {children}
    </RecordingsContext.Provider>
  );
};
