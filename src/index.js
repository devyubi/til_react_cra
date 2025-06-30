import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartPage from "./pages/StartPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Hello = function () {
  return <div>안녕하세요.</div>;
};
root.render(
  <div className="wrap">
    <StartPage></StartPage>
  </div>,
);
