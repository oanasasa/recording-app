import React, { createContext, useState, useEffect, useContext } from "react";
import { getFilesAndDocuments } from "../utils/firebase/firebase.utils";

//furnizorul de fisiere locale
export const FilesContext = createContext({
  filesMap: {},
});

export const useFilesContext = () => useContext(FilesContext);

export const FilesProvider = ({ children }) => {
  const [filesMap, setFilesMap] = useState({});

  useEffect(() => {
    //adaugarea prin decomentarea liniei de cod a fișierelor noi
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
