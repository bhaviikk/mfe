import React from "react";

function Header() {
  return (
    <div style={{ background: "#000000", height: "80px", width: "100%" }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          height: "100%",
          padding: "0px 20px",
          color: "white",
        }}
      >
        Header
      </span>
    </div>
  );
}

export default Header;
