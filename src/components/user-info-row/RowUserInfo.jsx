import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import './rowUserInfo.css'

const RowUserInfo = ({ hospitalPatient, doctor }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    if (hospitalPatient) {
      setName(hospitalPatient.nome)
      setAge(hospitalPatient.idade)
    } else {
      setName(doctor.nome)
      setAge(doctor.idade)
    }
   }, [doctor?.idade, doctor?.nome, hospitalPatient])

  return (
    <button
      type="button"
      className={`d-flex p-3 align-items-center justify-content-start button-container`}
    >
      <img className={`me-4 img-profile`} src="./src/assets/person-circle.svg" alt="" />
      <div className={`d-flex align-items-center`}>
        <div className={`d-flex align-items-center column-gap-2`}>
          <p className={`words`}>Nome: {name}</p>
          <p className={`words`}>Idade: {age}</p>
        </div>
        <div className={`d-flex align-items-center column-gap-2`}>
          <p className={`words`}>
            {doctor?.especialidade
              ? `Especialidade: ${doctor?.especialidade}`
              : `Tipo sanguineo: ${hospitalPatient?.tipo_sanguineo}`}
          </p>
          <p className={`words`}>
            {doctor?.status
              ? `Status: ${doctor?.status}`
              : `Ultima consulta: ${hospitalPatient?.ultima_consulta}`}
          </p>
        </div>
      </div>
    </button>
  )

}

RowUserInfo.propTypes = {
  hospitalPatient: PropTypes.shape({
    nome: PropTypes.string,
    idade: PropTypes.string,
    tipo_sanguineo: PropTypes.string,
    ultima_consulta: PropTypes.string,
  }),
  doctor: PropTypes.shape({
    nome: PropTypes.string,
    idade: PropTypes.string,
    especialidade: PropTypes.string,
    status: PropTypes.string,
  }),
}

export default RowUserInfo
