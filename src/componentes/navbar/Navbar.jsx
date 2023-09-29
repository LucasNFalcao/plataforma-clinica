import { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [abaSelecionada, setAbaSelecionada] = useState(1)
  const [barraLateralAberta, setBarraLateralAberta] = useState('')

  const handleControleBarraLateral = (value) => {
    if (value) {
      setBarraLateralAberta('active')
    } else {
      setBarraLateralAberta('')
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="" className={`logo`}>
            <img src="" alt="" />
            <span className={`nav-item`}>Code Info</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* É uma imagem */}
            <span className={`nav-item`}>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* É uma imagem */}
            <span className={`nav-item`}>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* É uma imagem */}
            <span className={`nav-item`}>Task</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* É uma imagem */}
            <span className={`nav-item`}>Wallet</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* É uma imagem */}
            <span className={`nav-item`}>Analytics</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
