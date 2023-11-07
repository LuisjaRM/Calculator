import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Contexts

import { SetPriceProvider } from "./contexts/SetPriceContext.jsx";
import { SetParametersProvider } from "./contexts/SetParametersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SetPriceProvider>
      <SetParametersProvider>
        <App />
      </SetParametersProvider>
    </SetPriceProvider>
  </React.StrictMode>
);
