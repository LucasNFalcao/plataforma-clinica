import { useState, useEffect } from 'react'
import './listaPacientes.css'

import PerfilLinear from '../perfil_linear/PerfilLinear'
import PropTypes from 'prop-types'

const ListaPacientes = ({ ehPacientes = false, ehMedicos = false }) => {
  const [listaUsuarios, setListaUsuarios] = useState([])

  useEffect(() => {
    if (ehMedicos) {
      fetch('http://localhost:5000/medicos')
        .then((response) => response.json())
        .then((response) => setListaUsuarios(response))
        .catch((error) => console.log(error))
    }

  }, [ehMedicos])

  useEffect(() => {
    if (ehPacientes) {
      fetch('http://localhost:5000/pacientes')
        .then((response) => response.json())
        .then((response) => setListaUsuarios(response))
        .catch((error) => console.log(error))
    }
  }, [ehPacientes])

  const handleListaUsuarios = () => {
    if (ehPacientes) {
      console.log('Eh pacientes há fazer: ', ehPacientes)
      return listaUsuarios?.map((paciente, index) => {
        return <PerfilLinear key={index + paciente.tipo_sanguineo} paciente={paciente} />
      })
    }
    console.log('Entrou dentro do listaUsuarios: ', listaUsuarios)
    return listaUsuarios?.map((medico, index) => {
      return <PerfilLinear key={index + medico.especialidade} medico={medico} />
    })
  }

  return <div className={`d-flex flex-column row-gap-3 lista-pacientes`}>
    {handleListaUsuarios()}
  </div>
}

ListaPacientes.propTypes = {
  ehPacientes: PropTypes.bool,
  ehMedicos: PropTypes.bool,
}

export default ListaPacientes
