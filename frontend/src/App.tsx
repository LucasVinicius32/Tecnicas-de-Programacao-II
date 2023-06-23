import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Clientes from "./components/pages/cliente";
import Acomodacoes from "./components/pages/acomodacoes";
import Hospedagens from "./components/pages/hospedagens";
import CadCli from './components/pages/cadCli';
import CadDep from './components/pages/cadDep';
import CadHosp from './components/pages/cadHosp';
import Dependentes from './components/pages/dependente';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Clientes/>} />
          <Route path="/cadCli" element={<CadCli/>} />
          <Route path="/dependentes" element={<Dependentes/>} />
          <Route path="/cadDep" element={<CadDep/>} />
          <Route path="/acomodacoes" element={<Acomodacoes/>} />
          <Route path="/hospedagens" element={<Hospedagens/>} />
          <Route path="/cadHosp" element={<CadHosp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;