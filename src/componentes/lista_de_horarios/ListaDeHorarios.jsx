import { useState, useEffect } from 'react'
import HorarioIndividual from '../horario_individual/HorarioIndividual'

import './listaDeHorarios.css'

const ListaDeHorarios = () => {
  const [horariosAgendados, setHorariosAgendados] = useState([])
  const [horariosIndisponiveis, setHorariosIndisponiveis] = useState([])
  const [agendaDoDia, setAgendaDoDia] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/definicao_horarios')
      .then((response) => response.json())
      .then((response) => setAgendaDoDia(response))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/agendamentos')
      .then((response) => response.json())
      .then((response) => setHorariosAgendados(response))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/horarios_indisponiveis')
      .then((response) => response.json())
      .then((response) => setHorariosIndisponiveis(response))
      .catch((error) => console.log(error))
  }, [])


  const handleAtualizarAgenda = () => {
    const arrayAuxiliar = []
    let itemAgendaDoDia

    for (let contador = 0; contador < agendaDoDia.length; contador++){
      itemAgendaDoDia = ""
      for (let contHorAgendado = 0; contHorAgendado < horariosAgendados.length; contHorAgendado++){
        if (agendaDoDia[contador] === horariosAgendados[contHorAgendado].horario) {
          itemAgendaDoDia = horariosAgendados[contHorAgendado]
        }
      }

      for (let contHorIndisponivel = 0; contHorIndisponivel < horariosAgendados.length; contHorIndisponivel++) {
        if (agendaDoDia[contador] === horariosIndisponiveis[contHorIndisponivel].horaIndisponivel) {
          itemAgendaDoDia = horariosIndisponiveis[contHorIndisponivel]
        }
      }

      arrayAuxiliar[contador] = itemAgendaDoDia ? itemAgendaDoDia : agendaDoDia[contador]
    }

    return arrayAuxiliar
  }

  useEffect(() => {
    setAgendaDoDia(handleAtualizarAgenda())
  }, [horariosAgendados, horariosIndisponiveis])

  return (
    <div className={`lista-container`}>
      <ul className={`list-group overflow-auto row-gap-2 bg-body-secondary lista-pai`}>
        {agendaDoDia?.map((horaDoDia, index) => {
          return (
            <li className={`list-group-item`} key={index}>
              <HorarioIndividual horarioInfo={horaDoDia} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListaDeHorarios
