import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

function App() {

  return (
    <div className={`container-app`}>
      <Outlet />
    </div>
  )
}

export default App
