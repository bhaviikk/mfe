import React from "react";
import ReactDOM from "react-dom";
import { View } from "./components/Details";

import "./index.css";

const App = () => (
  <div className="container">
    <View
      data={{
        id: "",
        height: "",
        weight: "",
      }}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
