import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
const PersonFormComp = React.lazy(() => import("./components/PersonForm"));
const DetailView = React.lazy(() => import("./components/DetailView"));

const App = () => {
  const [formData, setFormData] = useState({});
  const cb = (data) => {
    setFormData(data);
  };
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          rowGap: "1rem",
          padding: "2rem 4rem",
          overflow: "auto",
          flex: "1",
        }}
      >
        <ErrorBoundary>
          <React.Suspense fallback="Loading">
            <PersonFormComp cb={cb} />
          </React.Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <React.Suspense fallback="Loading">
            <DetailView data={formData} />
          </React.Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
