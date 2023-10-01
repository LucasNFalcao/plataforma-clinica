import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import './perfilLinear.css'

const PerfilLinear = ({ paciente, medico }) => {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  useEffect(() => {
    if (paciente) {
      setNome(paciente.nome)
      setIdade(paciente.idade)
    } else {
      setNome(medico.nome)
      setIdade(medico.idade)
    }
   }, [medico?.idade, medico?.nome, paciente])

  return (
    <button
      type="button"
      className={`d-flex p-3 align-items-center justify-content-start button-container`}
    >
      <img className={`me-4 img-perfil`} src="./src/assets/person-circle.svg" alt="" />
      <div className={`d-flex align-items-center`}>
        <div className={`d-flex align-items-center column-gap-2`}>
          <p className={`words`}>Nome: {nome}</p>
          <p className={`words`}>Idade: {idade}</p>
        </div>
        <div className={`d-flex align-items-center column-gap-2`}>
          <p className={`words`}>
            {medico?.especialidade
              ? `Especialidade: ${medico?.especialidade}`
              : `Tipo sanguineo: ${paciente?.tipo_sanguineo}`}
          </p>
          <p className={`words`}>
            {medico?.status
              ? `Status: ${medico?.status}`
              : `Ultima consulta: ${paciente?.ultima_consulta}`}
          </p>
        </div>
      </div>
    </button>
  )

}

PerfilLinear.propTypes = {
  paciente: PropTypes.shape({
    nome: PropTypes.string,
    idade: PropTypes.string,
    tipo_sanguineo: PropTypes.string,
    ultima_consulta: PropTypes.string,
  }),
  medico: PropTypes.shape({
    nome: PropTypes.string,
    idade: PropTypes.string,
    especialidade: PropTypes.string,
    status: PropTypes.string,
  }),
}

export default PerfilLinear
