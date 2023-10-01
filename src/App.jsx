import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

// import Cabecalho from './componentes/cabecalho/cabecalho';
// import Navbar from "./componentes/navbar/Navbar";
// import Agendamento from "./paginas/agendamento/Agendamento";

function App() {

  return (
    <div className={``}>
      <Outlet/>
      {/* <Cabecalho/> */}
      {/* <Navbar /> */}
      {/* <Agendamento/> */}
    </div>
  )
}

export default App
