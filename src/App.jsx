import React, { useState } from "react";
import Snackbar from "./components/Snackbar";
import Button from "./components/Button";
import SideBar from "./components/SideBar";

const App = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <div>
      {/* testing snackbar */}
      <Snackbar
        openSnackbar={openSnackbar}
        onClose={handleOpenSnackbar}
        severity="info"
        message="created successfully"
      />

      {/* testing button */}
      <Button background="error" onClick={() => setOpenSidebar(!openSidebar)}>
        Click me
      </Button>

      {/* testing sidebar */}
      <SideBar openSidebar={openSidebar} position="left">
        This is side bar
      </SideBar>
    </div>
  );
};

export default App;
