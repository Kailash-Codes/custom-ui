import React, { useState } from "react";
import Snackbar from "./components/Snackbar";
import Button from "./components/Button";

const App = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
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
      <Button background="error">Click me</Button>
    </div>
  );
};

export default App;
