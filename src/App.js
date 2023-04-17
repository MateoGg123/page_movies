import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Comidas } from "./pages/Comidas";
import { CinesUbi } from "./pages/CinesUbi";
import { Home } from "./pages/Home";
import "./styles/App/App.css"

function App() {
  return (
    <div className="contenedor">
      <HashRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/comidas" element={<Comidas></Comidas>}></Route>
          <Route path="/cines" element={<CinesUbi></CinesUbi>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
