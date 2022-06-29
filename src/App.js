import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentification from "./routes/authentification/authentification.component";
import Navigation from "./routes/navigation/navigation.component";
import Record from "./routes/record/record.component";
import MyAccount from "./routes/my account/my-account.component";
import Specs from "./routes/specifications/specifications";
import { auth } from "./utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

const initAuthState = {
  id: "",
  name: "",
  email: "",
};

const AuthContext = React.createContext(initAuthState);

export const useAuthContext = () => useContext(AuthContext);

const App = () => {
  const [currentAuthState, setCurrentAuthState] = useState(initAuthState);

  const unsub = onAuthStateChanged(auth, (user) => {
    if (user && !currentAuthState.state) {
      setCurrentAuthState({
        state: true,
        id: auth.uid,
        name: auth.displayName,
        email: auth.email,
      });
    }
    if (!user && currentAuthState.state) {
      setCurrentAuthState({
        state: false,
        id: "",
        name: "",
        email: "",
      });
    }
  });

  useEffect(() => {
    return () => {
      unsub();
      // userData();
    };
  }, []);

  return (
    <AuthContext.Provider value={currentAuthState}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="record" element={<Record />} />
          <Route path="authentification" element={<Authentification />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="specs" element={<Specs />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
