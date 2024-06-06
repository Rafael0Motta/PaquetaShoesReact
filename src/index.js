import React from "react";
import ReactDOM from "react-dom/client";

/* STYLES */
import GlobalStyle from "./Style/GlobalStyle";

/* PAGES */
import Home from "./Pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Home />
    <GlobalStyle />
  </>
);
