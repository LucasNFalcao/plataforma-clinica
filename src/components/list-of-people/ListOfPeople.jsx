import { useState, useEffect } from 'react'
import './listOfPeople.css'

import RowUserInfo from '../user-info-row/RowUserInfo'
import PropTypes from 'prop-types'

const ListOfPeople = ({ isHospitalPatient = false, isDoctor = false }) => {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    if (isDoctor) {
      fetch('http://localhost:5000/medicos')
        .then((response) => response.json())
        .then((response) => setListUsers(response))
        .catch((error) => console.log(error))
    }
  }, [isDoctor])

  useEffect(() => {
    if (isHospitalPatient) {
      fetch('http://localhost:5000/pacientes')
        .then((response) => response.json())
        .then((response) => setListUsers(response))
        .catch((error) => console.log(error))
    }
  }, [isHospitalPatient])

  const handleUpdateList = () => {
    console.log('list: ', listUsers)
    if (isHospitalPatient) {
      return listUsers?.map((hospitalPatient, index) => {
        return (
          <RowUserInfo
            key={index + hospitalPatient.tipo_sanguineo}
            hospitalPatient={hospitalPatient}
          />
        )
      })
    }
    return listUsers?.map((doctor, index) => {
      return <RowUserInfo key={index + doctor.especialidade} doctor={doctor} />
    })
  }

  return (
    <div className={`d-flex flex-column row-gap-3 list-users`}>{handleUpdateList()}</div>
  )
}

ListOfPeople.propTypes = {
  isHospitalPatient: PropTypes.bool,
  isDoctor: PropTypes.bool,
}

export default ListOfPeople
