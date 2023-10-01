import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AreaDeTrabalho from './paginas/area-de-trabalho/AreaDeTrabalho.jsx'
import Agendamento from './paginas/agendamento/Agendamento.jsx';
import Erro from './paginas/erro/Erro.jsx';
import Login from './paginas/login/Login.jsx';

const routes = createBrowserRouter([
  {
    path: "/", element: <App/>, errorElement: <Erro/>,
    children: [
      { path: "/", element: <AreaDeTrabalho /> },
      { path: "/agendamento", element: <Agendamento /> },
      { path: "/login", element: <Login />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
