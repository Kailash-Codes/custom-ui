import React from "react";
import "../assets/css/sidebar.css";
const SideBar = ({ openSidebar, children, position }) => {
  return (
    <div
      className={
        openSidebar && position === "right"
          ? "sidebar-shown-right"
          : openSidebar
          ? "sidebar-shown"
          : position === "right"
          ? "sidebar-hidden-right"
          : "sidebar-hidden"
      }
    >
      {children}
    </div>
  );
};

export default SideBar;
