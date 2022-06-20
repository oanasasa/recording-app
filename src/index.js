import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { FilesProvider } from "./contexts/files.context";
import { RecordingsProvider } from "./contexts/recordings.context";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <FilesProvider>
      <BrowserRouter>
        <UserProvider>
          <RecordingsProvider>
            <App />
          </RecordingsProvider>
        </UserProvider>
      </BrowserRouter>
    </FilesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
