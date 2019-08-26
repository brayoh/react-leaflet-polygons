import React from "react";
import ReactDOM from "react-dom";
import VectorLayersExample from "./components/Map";

import "./styles.css";

function App() {
  return <VectorLayersExample />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
