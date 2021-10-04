import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Academic from "./components/academic/Academic";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import {useState} from 'react';
import Menu from "./components/menu/Menu";

function App() {
  
  const [menuOn, setMenuOn] = useState(false);

  return (
    <div className="app">
      <Topbar menuOn={menuOn} setMenuOn={setMenuOn}></Topbar>
      <Menu menuOn={menuOn} setMenuOn={setMenuOn}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Academic></Academic>
      </div>
    </div>
  );
}

export default App;
