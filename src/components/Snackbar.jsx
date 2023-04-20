import React from "react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { MdDone, MdWarning } from "react-icons/md";
import { BiError } from "react-icons/bi";
const Snackbar = ({ severity, message, openSnackbar, onClose }) => {
  const iconSize = "20";
  return (
    <>
      {openSnackbar === true ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            minWidth: "250px",
            position: "absolute",
            marginLeft: "50%",
            transform: "translate(-50%)",
            fontWeight: "lighter",
            fontFamily: "sans-serif",
            border:
              severity === "error"
                ? "1px solid #D74545"
                : severity === "info"
                ? "1px solid #1D95D6"
                : severity === "success"
                ? "1px solid #4D9A51"
                : severity === "warning"
                ? "#F68A1C"
                : null,
            padding: ".5rem",
            borderRadius: "5px",
            color: "#fff",
            background:
              severity === "error"
                ? "#D74545"
                : severity === "info"
                ? " #1D95D6"
                : severity === "success"
                ? " #4D9A51"
                : severity === "warning"
                ? "#F68A1C"
                : null,
          }}
        >
          {severity === "error" ? (
            <BiError size={iconSize} />
          ) : severity === "success" ? (
            <MdDone size={iconSize} />
          ) : severity === "info" ? (
            <AiOutlineInfoCircle size={iconSize} />
          ) : severity === "warning" ? (
            <MdWarning size={iconSize} />
          ) : null}
          {message}
          {onClose ? (
            <button
              onClick={onClose}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "5px",
                color: "#fff",
                background: "none",
                border: "0",
                padding: "0",
              }}
            >
              <AiOutlineClose />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Snackbar;
