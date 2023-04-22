import "../assets/css/button.css";
import React from "react";

const Button = ({ children, background,onClick }) => {
  return (
    <button
    onClick={onClick}
      className={
        background === "blue"
          ? "primary"
          : background === "error"
          ? "error"
          : background === "warning"
          ? "warning"
          : "primary"
      }
    >
      {children}
    </button>
  );
};

export default Button;
