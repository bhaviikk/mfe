import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PersonForm } from "form/Form";
import { View } from "details/Details";

import "./index.css";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [formData, setFormData] = useState({});
  const cb = (data) => {
    setFormData(data);
  };
  return (
    <div className="container">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: "80px",
        }}
      >
        <PersonForm count={count} cb={cb} />
        <View data={formData} />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
