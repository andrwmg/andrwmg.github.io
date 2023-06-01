import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { IconButton, SvgIcon } from "@mui/material";


const LogoIcon = (props) => (
  <SvgIcon {...props}>

    <path d="M0.158161 19.8415L7.91181 4.3342C7.93945 4.27892 8.01833 4.27892 8.04597 4.3342L15.7996 19.8415C15.8246 19.8914 15.7883 19.95 15.7325 19.95H12.9001C12.8718 19.95 12.8458 19.9341 12.8331 19.9088L7.97183 10.2599C7.94394 10.2045 7.86475 10.205 7.83749 10.2607L4.43176 17.2171C4.40736 17.2669 4.44364 17.325 4.49911 17.325H8.60694C8.63566 17.325 8.66186 17.3414 8.6744 17.3673L9.87655 19.8423C9.90074 19.8921 9.86446 19.95 9.80908 19.95H0.225243C0.16949 19.95 0.133227 19.8914 0.158161 19.8415Z" fill={props.fill} />
    <path d="M14.8038 12L16.1538 14.625H20.4765C19.7854 15.8197 18.6372 16.7167 17.271 17.0769L17.8788 18.225L18.4788 19.5V19.5323C21.6187 18.4696 23.8788 15.4988 23.8788 12H14.8038Z" fill={props.fill} />
    <path d="M23.461 9.45005C22.3984 6.31016 19.4275 4.05005 15.9288 4.05005C14.2899 4.05005 12.7668 4.54599 11.5014 5.39598L11.5038 5.40005L12.6975 7.862C13.5884 7.16529 14.7101 6.75005 15.9288 6.75005C17.9028 6.75005 19.6224 7.83955 20.519 9.45005H23.461Z" fill={props.fill} />

  </SvgIcon>

)

function DrawerAppBar(props) {

  return (
    <Box sx={{
      display: "flex", position: 'sticky', zIndex: 5, opacity: props.theme ? 1 : 0, transition: 'opacity 1s ease-in-out', 
    }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundImage: 'none',
          backgroundColor: props.theme === 'light' ? 'white' : 'black',
          zIndex: (theme) => theme.zIndex.drawer + 5,
          boxShadow: 'none',
          maxHeight: '64px'
          // transition: '.3s ease-in-out'
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              paddingRight: 2,
              display: "block",
              whiteSpace: "nowrap",
            }}
          >
            Andrew Michael Gay
          </Typography> */}
          <IconButton onClick={props.toggleTheme}>
            <LogoIcon fill={props.theme === 'dark' ? 'white' : 'black'} style={{
              paddingRight: 2,
              fontSize: '2.5rem'
            }} />
          </IconButton>
          <Box sx={{
            display:
            {
              xs:
                "flex"
            }, width: "100%"
          }}>
            {/* <FormControlLabel control={<Switch checked={props.theme === 'dark'} onChange={props.toggleTheme} title='dark' />} label={props.theme === 'dark' ? 'Dark' : 'Light'} sx={{ display: 'block', color: props.theme === 'dark' ? 'white' : 'black' }} /> */}

            <Button
              href="https://drive.google.com/uc?export=view&id=1MX4ZWU4RNRpj3mL2C9uz_dYX0p7O8GvX"
              sx={{
                color: props.theme === 'dark' ? "white" : "rgba(0, 0, 0, 0.87)", ml: "auto", transition: 'color 0s', '&:.MuiButtonBase-root': { bgcolor: props.theme === 'dark' && 'black', transition: 'background-color 0s' },
              }}>
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
