import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 News App. Created with passion by Dharm.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#f1f1f1",
  padding: "20px",
  left: "0",
  bottom: "0",
  width: "100%",
  textAlign: "center",
  borderTop: "1px solid #ccc",
};

export default Footer;
