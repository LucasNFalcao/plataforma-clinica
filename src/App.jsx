import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

import Cabecalho from './componentes/cabecalho/cabecalho';
import Navbar from "./componentes/navbar/Navbar";

function App() {

  return (
    <div className={``}>
      <Cabecalho/>
      <Navbar />
    </div>
  )
}

export default App
