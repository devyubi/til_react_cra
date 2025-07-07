import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Comments from "./pages/Comments";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <Posts></Posts>
    <Albums></Albums>
    <Photos></Photos>
    <Todos></Todos>
    <Users></Users>
    <Comments></Comments>
  </div>,
);
