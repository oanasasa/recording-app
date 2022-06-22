import React, { createContext, useState, useEffect, useContext } from "react";

export const RecordingsContext = createContext({
  recordingsMap: [],
  setRecordingsMap: () => {},
});

export const RecordingsProvider = ({ children }) => {
  const [recordingsMap, setRecordingsMap] = useState([]);

  return (
    <RecordingsContext.Provider value={{ recordingsMap, setRecordingsMap }}>
      {children}
    </RecordingsContext.Provider>
  );
};
