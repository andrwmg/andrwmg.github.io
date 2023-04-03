import "./App.css";
import Resume from "./Resume";
import { Route, Routes, Navigate } from "react-router-dom";
// import UseRedirectToHttps from "./hooks/useRedirectToHttps";
import DrawerAppBar from "./Navbar";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const theme = unstable_createMuiStrictModeTheme({
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: ['50px', '!important'],
      fontFamily: ['Poppins', '!important']
    },
    h2: {
      fontWeight: 500,
      fontSize: ["32px", '!important'],
      fontFamily: ['Poppins', '!important'],
    },
    h3: {
      fontWeight: 400,
      fontSize: ["29px", '!important']
    },
    h4: {
      fontSize: ["24px", '!important'],
      // letterSpacing: '.1em',
      // textTransform: 'uppercase'
    },
    body1: {
      fontSize: ["16px", '!important']
    },
    body2: {
      fontSize: ["14px", '!important']
    },
    p: {
      fontSize: '12px',
      fontWeight: 700,
    },
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
  button: {
    primary: {
      main: 'white',
      contrastText: "#fff" //button text white instead of black
    },
    background: {
      default: 'black'
    },
    fontWeight: 400,
    fontSize: ["24px", '!important'],
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            fontWeight: 700,
            color: "black",
          },
          textPrimary: {
            fontWeight: "bold",
            color: "black",
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontWeight: "bold",
            color: "black",
          },
        },
      },
    },
  }
});

function App() {
  // UseRedirectToHttps();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ThemeProvider>
      {/* </DrawerAppBar> */}
    </div>
  );
}

export default App;
