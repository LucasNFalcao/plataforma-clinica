/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import LineScheduledTime from '../line-scheduled-time/LineScheduledTime'

import './timetableList.css'

const TimetableList = () => {
  const [scheduledTimetable, setScheduledTimetable] = useState([])
  const [schedulesUnavailable, setSchedulesUnavailable] = useState([])
  const [dailyAgenda, setDailyAgenda] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/definicao_horarios')
      .then((response) => response.json())
      .then((response) => setDailyAgenda(response))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/agendamentos')
      .then((response) => response.json())
      .then((response) => setScheduledTimetable(response))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/horarios_indisponiveis')
      .then((response) => response.json())
      .then((response) => setSchedulesUnavailable(response))
      .catch((error) => console.log(error))
  }, [])


  const handleUpdateDailyAgenda = () => {
    const auxiliaryList = []
    let itemDailyAgenda

    for (let counter = 0; counter < dailyAgenda.length; counter++){
      itemDailyAgenda = ""
      for (let contScheduled = 0; contScheduled < scheduledTimetable.length; contScheduled++){
        if (dailyAgenda[counter] === scheduledTimetable[contScheduled].horario) {
          itemDailyAgenda = scheduledTimetable[contScheduled]
        }
      }

      for (let contUnavailableTime = 0; contUnavailableTime < scheduledTimetable.length; contUnavailableTime++) {
        if (dailyAgenda[counter] === schedulesUnavailable[contUnavailableTime].horaIndisponivel) {
          itemDailyAgenda = schedulesUnavailable[contUnavailableTime]
        }
      }

      auxiliaryList[counter] = itemDailyAgenda ? itemDailyAgenda : dailyAgenda[counter]
    }

    return auxiliaryList
  }

  useEffect(() => {
    setDailyAgenda(handleUpdateDailyAgenda())
  }, [scheduledTimetable, schedulesUnavailable])

  return (
    <div className={`list-container`}>
      <ul className={`list-group overflow-auto row-gap-2 bg-body-secondary unordered-list`}>
        {dailyAgenda?.map((timeDay, index) => {
          return (
            <li className={`list-group-item`} key={index}>
              <LineScheduledTime infoScheduledTime={timeDay} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TimetableList
