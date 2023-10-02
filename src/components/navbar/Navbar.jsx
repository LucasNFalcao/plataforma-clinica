import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = ({ nameClass }) => {

  return (
    <nav className={`${nameClass}`}>
      <ul className={`p-0 mt-4`}>
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

Navbar.propTypes = {
  nameClass: PropTypes.string
}

export default Navbar
