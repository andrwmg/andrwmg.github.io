import "./App.css";
import Resume from "./ResumeMui";
import { Route, Routes, Navigate } from "react-router-dom";
import UseRedirectToHttps from "./hooks/useRedirectToHttps";
import DrawerAppBar from "./Navbar";

function App() {
  UseRedirectToHttps();
  return (
    <div className="App">
      <DrawerAppBar>
        <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </DrawerAppBar>
    </div>
  );
}

export default App;
