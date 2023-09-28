import { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [abaSelecionada, setAbaSelecionada] = useState(1)

  return (
    <nav className={`nav nav-pills d-flex flex-column align-items-center justify-content-center navbar p-0`}>
      <button className={`border-0 p-0 d-inline-flex justify-content-center`} type="button">
        <img className={`button-arrow`} src="./src/assets/chevron-double-right.svg" alt="" /></button>
      <div className={`d-flex flex-column mt-4 align-items-end`}>
        <a
          className={`nav-link ${abaSelecionada === 1 ? 'active' : ''} pe-0`}
          aria-current="page"
          href="#"
          onClick={() => setAbaSelecionada(1)}
        >
          Área de Trabalho
        </a>
        <a
          className={`nav-link ${abaSelecionada === 2 ? 'active' : ''} pe-0`}
          href="#"
          onClick={() => setAbaSelecionada(2)}
        >
          Agendamento de Consulta
        </a>
        <a
          className={`nav-link ${abaSelecionada === 3 ? 'active' : ''} pe-0`}
          href="#"
          onClick={() => setAbaSelecionada(3)}
        >
          Consulta de Agendamentos
        </a>
      </div>
    </nav>
  )
}

export default Navbar
