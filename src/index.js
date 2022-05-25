import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ClassificationContextProvider } from "./context/classificationContext/ClassificationContext";
import { PlantContextProvider } from "./context/plantContext/PlantContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlantContextProvider>
        <ClassificationContextProvider>
          <App />
        </ClassificationContextProvider>
      </PlantContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
