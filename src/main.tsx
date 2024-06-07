// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";
import "/public/css/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
