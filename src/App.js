import "./App.css";
import Resume from "./ResumeMui";
import Portfolio from "./Portfolio";
import { Route, Routes, Navigate } from "react-router-dom";
import UseRedirectToHttps from "./hooks/useRedirectToHttps";
import AppAbout from "./AppAbout";
import DrawerAppBar from "./Navbar";

function App() {
  // UseRedirectToHttps();
  return (
    <div className="App">
      <DrawerAppBar>
        <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="*" element={<Navigate replace to="/sw/resume" />} />

          {/* <Route path="/" element={<Navigate replace to="/sw/resume" />} />
          <Route path="/sw/resume" element={<Resume />} />
          <Route path="/sw/portfolio" element={<Portfolio />} />
          <Route path="/sw/portfolio/teslamartv2" element={<AppAbout />} /> */}
        </Routes>
      </DrawerAppBar>
    </div>
  );
}

export default App;
