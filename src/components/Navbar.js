import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function DrawerAppBar(props) {

  return (
    <Box sx={{ display: "flex", position: 'sticky', zIndex: 5 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'white',
          zIndex: (theme) => theme.zIndex.drawer + 5,
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              paddingRight: 2,
              display: "block",
              whiteSpace: "nowrap",
            }}
            color="#000"
          >
            Andrew Michael Gay
          </Typography>
          <Box sx={{ display: 
            { xs: 
            "flex" }, width: "100%" }}>

            <Button
              href="https://drive.google.com/uc?export=download&id=MX4ZWU4RNRpj3mL2C9uz_dYX0p7O8GvX"
              sx={{ color: "rgba(0, 0, 0, 0.87)", ml: "auto" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
