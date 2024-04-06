import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import bg from "./Asset/bg2.jpg";
import AboutMe from "./Page/AboutMe";
import ContacUs from "./Page/ContacUs";
import EduDanExp from "./Page/EduDanExp";
import Home1 from "./Page/Home1";
import Portofolio from "./Page/Portofolio";
import Skill from "./Page/Skill";
function App() {
  const appRef = useRef(null);
  return (
    <div
      ref={appRef}
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Router>
        <Routes>
          <Route exact path="/" Component={Home1} />
          <Route path="/Home" Component={Home1} />
          <Route path="/AboutMe" Component={AboutMe} />
          <Route path="/Skill" Component={Skill} />
          <Route path="/EduDanExp" Component={EduDanExp} />
          <Route path="/Portofolio" Component={Portofolio} />
          <Route path="/ContacUs" Component={ContacUs} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
