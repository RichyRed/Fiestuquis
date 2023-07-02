import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { types } from "../../context/storeReducer";
import { Button } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    dispatch({ type: types.logout });  
    navigate("/");
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
        Fiestuquis
        </Typography>
        <Typography onClick={handleChange} component="div" sx={{ flexGrow: -9, textAlign: "rigth"}}> LogOut </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
