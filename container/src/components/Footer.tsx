import React from "react";

function Footer() {
  return (
    <div
      style={{
        background: "#000000",
        height: "80px",
        width: "100%",
        position: "fixed",
        bottom: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          flexDirection: "row",
          padding: "0px 20px",
          color: "#ffffff",
        }}
      >
        <span>Footer</span>
        <span>&copy; All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
