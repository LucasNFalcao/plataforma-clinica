import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

import Cabecalho from './componentes/cabecalho/cabecalho';
import Navbar from "./componentes/navbar/Navbar";
import MenuRolagem from "./componentes/menu_de_rolagem/MenuRolagem";
import ListaPacientes from "./componentes/lista_pacientes/ListaPacientes";

function App() {

  return (
    <div className={`body-app`}>
      <Cabecalho/>
      <Navbar />
      <MenuRolagem />
      <ListaPacientes/>
    </div>
  )
}

export default App
