import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

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
    <div>
      <img src="" alt="" />
      <div>
        <span>Nome: {nome}</span>
        <span>Idade: {idade}</span>
        <span>{medico?.especialidade ? `Especialidade: ${medico?.especialidade}` : `Tipo sanguineo: ${paciente?.tipo_sanguineo}`}</span>
        <span>{medico?.status ? `Status: ${medico?.status}` : `Ultima consulta: ${paciente?.ultima_consulta}`}</span>
      </div>
    </div>
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
