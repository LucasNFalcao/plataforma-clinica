import PropTypes from 'prop-types'

import './header.css'

const Header = ({ nameClass }) => {

  return (
    <header
      className={`container-fluid d-flex justify-content-between align-items-center
      p-3 header ${nameClass}`}
    >
      <div className={`d-flex flex-column ms-5 text-start`}>
        <h3 className={`fw-bold text-black fs-3`}>WebAPP - Consultório Médico</h3>
        <p className={`text-black fs-5`}>
          Bem vindo Dr.
        </p>
      </div>
      <div className={`d-flex flex-column align-items-center btn btn-perfil`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className={`bi bi-person-circle`}
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <p className={`text-black fs-5`}>Dr. Henrique</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  nameClass: PropTypes.string,
}

export default Header
