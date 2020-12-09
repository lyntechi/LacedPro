import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import "./styles/main.scss";
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <App />
  </Router>,
  rootElement
);
