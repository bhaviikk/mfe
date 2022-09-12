import React from "react";
import ReactDOM from "react-dom";
import { PersonForm } from "./components/Form";

import "./index.css";

const App = () => (
  <div className="container">
   <PersonForm cb={()=>{}}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
