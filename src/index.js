import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { FilesProvider } from "./contexts/files.context";
import { RecordingsProvider } from "./contexts/recordings.context";
import App from "./App";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);
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

reportWebVitals();
