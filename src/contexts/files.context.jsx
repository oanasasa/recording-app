import React, { createContext, useState, useEffect, useContext } from "react";
import { getFilesAndDocuments } from "../utils/firebase/firebase.utils";

export const FilesContext = createContext({
  filesMap: {},
});

export const useFilesContext = () => useContext(FilesContext);

export const FilesProvider = ({ children }) => {
  const [filesMap, setFilesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDocuments("Text Folder", TEXT_DATA);

    const getFilesMap = async () => {
      const fileMap = await getFilesAndDocuments();
      setFilesMap(fileMap);
    };
    getFilesMap();
  }, []);

  return (
    <FilesContext.Provider value={{ filesMap }}>
      {children}
    </FilesContext.Provider>
  );
};
