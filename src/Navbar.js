import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Download,
} from "@mui/icons-material";
import "./Navbar.css";
import { grey } from "material-ui-colors";


function DrawerAppBar(props) {

  return (
    <Box sx={{ display: "flex", position: 'sticky', zIndex: 5 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'white',
          // backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0,.75), rgba(0, 0, 0, 0))',
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
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: "auto", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ display: 
            { xs: 
            // "none", sm: 
            "flex" }, width: "100%" }}>
            {/* <Button href="/sw/resume" key="Resume">
              <NavLink to="/sw/resume">Home</NavLink>
            </Button>
            <Button href="/sw/portfolio" key="Portfolio">
              <NavLink to="/sw/portfolio">Portfolio</NavLink>
            </Button> */}
            <Button
              href="https://drive.google.com/uc?export=download&id=1s38y5Lz6UtuFUUSC5hcSTVJXa4WKmwn-"
              // startIcon={<Download />}
              sx={{ color: "#000", ml: "auto" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginRight: 0,
            },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box> */}
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
