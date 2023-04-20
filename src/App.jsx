import React, { useState } from "react";
import Snackbar from "./components/Snackbar";

const App = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const handleOpenSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <div>
      <Snackbar
        openSnackbar={openSnackbar}
        onClose={handleOpenSnackbar}
        severity="info"
        message="created successfully"
      />
    </div>
  );
};

export default App;
