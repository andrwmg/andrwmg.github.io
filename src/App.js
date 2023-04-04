import './css/App.css';
import Main from './components/Main';
import DrawerAppBar from "./components/Navbar";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Navigate, Route, Routes } from 'react-router-dom';

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
      letterSpacing: '.1em',
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
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
