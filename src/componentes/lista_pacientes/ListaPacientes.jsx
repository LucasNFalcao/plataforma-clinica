import { useState, useEffect, useCallback } from 'react'
import './listaPacientes.css'

import PerfilLinear from '../perfil_linear/PerfilLinear'
import PropTypes from 'prop-types'


const mockup_pacientes = [
  {
    nome: 'Carlos Andrade',
    idade: '20 anos',
    tipo_sanguineo: 'AB-',
    ultima_consulta: '20 de setembro de 2023',
  },
  {
    nome: 'Maria Helena',
    idade: '25 anos',
    tipo_sanguineo: 'AB-',
    ultima_consulta: '20 de setembro de 2023',
  },
  {
    nome: 'José de Abreu',
    idade: '20 anos',
    tipo_sanguineo: 'AB-',
    ultima_consulta: '20 de setembro de 2023',
  },
  {
    nome: 'Joana Lopes',
    idade: '20 anos',
    tipo_sanguineo: 'AB-',
    ultima_consulta: '20 de setembro de 2023',
  },
]

const mockup_medicos = [
  {
    nome: 'Carlos Andrade',
    idade: '25 anos',
    especialidade: 'Otorrino',
    status: 'Presente no Hospital',
  },
  {
    nome: 'Maria Helena',
    idade: '25 anos',
    especialidade: 'Pediatra',
    status: 'Ausente no Hospital',
  },
  {
    nome: 'José de Abreu',
    idade: '50 anos',
    especialidade: 'Cardiologista',
    status: 'Férias',
  },
  {
    nome: 'Joana Lopes',
    idade: '30 anos',
    especialidade: 'Clinico Geral',
    status: 'Presente no Hospital',
  },
]
const ListaPacientes = ({ ehPacientes = true, ehMedicos, className }) => {

  const [listaUsuarios, setListaUsuarios] = useState([])

  const handleListaUsuarios = useCallback(() => {
    if (ehPacientes) {
      return mockup_pacientes.map((paciente, index) => {
        return <PerfilLinear key={index+paciente.tipo_sanguineo} paciente={paciente} />
      })
    }
    return mockup_medicos.map((medico, index) => {
      return <PerfilLinear key={index+medico.especialidade} medico={medico} />
    })
  }, [ehPacientes])

  useEffect(() => {
    setListaUsuarios(handleListaUsuarios())
  }, [ehMedicos, ehPacientes, handleListaUsuarios])


  return (
    <div className={`lista-pacientes ${className}`}>
      {listaUsuarios}
    </div>
  )
}

ListaPacientes.propTypes = {
  ehPacientes: PropTypes.array,
  ehMedicos: PropTypes.array,
  className: PropTypes.string,
}

export default ListaPacientes
