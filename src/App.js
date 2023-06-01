import './css/App.css';
import Main from './components/Main';
import DrawerAppBar from "./components/Navbar";
import { createTheme, unstable_createMuiStrictModeTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHours } from 'date-fns';
import { dark } from '@mui/material/styles/createPalette';

const light = createTheme({
  typography: {
    button: {
      textTransform: 'initial'
    },
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 600,
      fontSize: ['50px', '!important'],
      fontFamily: ['Poppins', '!important'],
      color: 'text.secondary'
    },
    h2: {
      fontWeight: 500,
      fontSize: ["32px", '!important'],
      fontFamily: ['Poppins', '!important'],
    },
    h3: {
      fontWeight: 400,
      fontSize: ["29px", '!important'],
    },
    h4: {
      fontSize: ["24px", '!important'],
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

  },
});



const darkTheme = createTheme({
  ...light,
  palette: {
    mode: 'dark'
  },
});

function App() {

  console.log(light)

  const [theme, setTheme] = useState(null)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (getHours(new Date()) > 6 && getHours(new Date()) < 19) {
      setTheme('dark')
    } else {
      setTheme('dark')
    }
  }, [])

  return (
    <div className="App" style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <ThemeProvider theme={theme === 'light' ? light : darkTheme}>
        <DrawerAppBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Main theme={theme} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
