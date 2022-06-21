import React, { createContext, useState, useEffect, useContext } from "react";
import UserProfileData from "../components/user-profile-component/user.profile.component";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getUserDataFromFireStore,
} from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  usersMap: [],
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersMap, setUsersMap] = useState([]);
  const value = { currentUser, setCurrentUser, usersMap };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const getUsersMap = async () => {
      const userMap = await getUserDataFromFireStore();
      setUsersMap(userMap);
      // console.log(userMap);
    };
    return getUsersMap;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
