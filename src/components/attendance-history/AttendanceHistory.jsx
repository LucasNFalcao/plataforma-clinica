import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './attendanceHistory.css'

const AttendanceHistory = ({ className }) => {

  const [bookingList, setBookingList] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/historico_clinico')
      .then((response) => response.json())
      .then((response) => setBookingList(response))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className={`attendance-container ${className}`}>
      <table className={`table`}>
        <thead>
          <tr>
            <th scope="col">Numero</th>
            <th scope="col">Paciente</th>
            <th scope="col">Data consulta</th>
            <th scope="col">Diagnóstico</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((itemScheduled, index) => {
            return (
              <tr key={index + index * 5}>
                <th scope="row">{index}</th>
                <td>{itemScheduled?.nome}</td>
                <td>{itemScheduled?.data}</td>
                <td>{itemScheduled?.diagnostico}</td>
                <td>{itemScheduled?.valor}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

AttendanceHistory.propTypes = {
  className: PropTypes.string
}

export default AttendanceHistory
