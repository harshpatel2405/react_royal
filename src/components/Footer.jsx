import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#111", // dark background
        color: "#f5f3f3ff", // softer gray text
        padding: "15px 10px",
        textAlign: "center",
        fontSize: "16px",
        borderTop: "2px solid #444",
        position: "fixed", // stick to viewport
        bottom: 0, // at the bottom
        left: 0,
        width: "100%", // full width
      }}
    >
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
