import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<Suspense />}>
        <App />
      </React.Suspense>
    </Provider>
  </StrictMode>
);
