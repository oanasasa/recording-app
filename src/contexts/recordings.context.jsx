import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUserRecordings } from "../utils/firebase/firebase.utils";

export const RecordingsContext = createContext({
  recordingsMap: [],
  setRecordingsMap: () => {},
});

// export const useRecordingsContext = () => useContext(RecordingsContext);

export const RecordingsProvider = ({ children }) => {
  const [recordingsMap, setRecordingsMap] = useState([]);

  return (
    <RecordingsContext.Provider value={{ recordingsMap, setRecordingsMap }}>
      {children}
    </RecordingsContext.Provider>
  );
};
