import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {

  const [abaSelecionada, setAbaSelecionada] = useState(1)
  const [barraLateralAberta, setBarraLateralAberta] = useState(false)
  console.log('barra: ', barraLateralAberta)

  return (
    <nav>
      <ul>
        <li>
          <a href="" className={`logo`} onClick={prevState => setAbaSelecionada(!prevState)}>
            <img className={`logo-principal`} src="./src/assets/chevron-double-right.svg" alt="" />
          </a>
        </li>
        <li>
          <Link to="/">
            <img className={`logos-imgs`} src="./src/assets/house-check.svg" alt="" />
            <span className={`nav-item`}>Área de Trabalho</span>
          </Link>
        </li>
        <li>
          <Link to="/agendamento">
            <img className={`logos-imgs`} src="./src/assets/pencil-square.svg" alt="" />
            <span className={`nav-item`}>Agendamento de Consulta</span>
          </Link>
        </li>
        <li>
          <Link to="/consultas-marcadas">
            <img className={`logos-imgs`} src="./src/assets/journal-medical.svg" alt="" />
            <span className={`nav-item`}>Consulta de Agendamentos</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
