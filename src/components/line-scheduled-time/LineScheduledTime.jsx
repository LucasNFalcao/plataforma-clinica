import { useState } from 'react'
import PropTypes from 'prop-types'

import RowUserInfo from '../user-info-row/RowUserInfo'
import ModalUser from '../../components/modal/ModalUser'
import './lineScheduledTime.css'

const LineScheduledTime = ({ infoScheduledTime }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleDeleteScheduledTime = (id) => {
    fetch('http://localhost:5000/agendamentos/'+ id, {
      method: 'delete'
    })
    .then(() => window.location = '/agendamentos')
    .catch(error => console.log(error))
   }

  return (
    <>
      {infoScheduledTime?.horaIndisponivel ? (
        <div className={`unavailable-time settings-font d-flex align-items-center`}>
          <span>{infoScheduledTime.horaIndisponivel}</span>
        </div>
      ) : (
        <div
          className={`settings-font time-on-agenda d-flex align-items-center justify-content-between`}
        >
          <span>{infoScheduledTime?.horario ? infoScheduledTime.horario : infoScheduledTime}</span>
          {infoScheduledTime?.horario && (
            <RowUserInfo hospitalPatient={infoScheduledTime.paciente} />
          )}
          {infoScheduledTime?.horario ? (
            <div className={`settings-buttons d-flex align-self-end column-gap-2`}>
              <button className={`bg-white`}>
                <img className={`img-svg`} src="./src/assets/calendar2-week.svg" alt="" />
              </button>
              <button
                className={`bg-white`}
                onClick={handleDeleteScheduledTime.bind(this, infoScheduledTime?.id)}
              >
                <img className={`img-svg`} src="./src/assets/trash3.svg" alt="" />
              </button>
              <button className={`bg-white`}>
                <img className={`img-svg`} src="./src/assets/pencil-fill.svg" alt="" />
              </button>
            </div>
          ) : (
            <button className={`bg-white d-flex`} onClick={() => setModalIsOpen(true)}>
              <img className={`img-svg`} src="./src/assets/plus-circle.svg" alt="" />
            </button>
          )}
        </div>
      )}
      {modalIsOpen && <ModalUser
        open={modalIsOpen}
        valueModal={infoScheduledTime}
        setIsOpen={setModalIsOpen} />}
    </>
  )
}

LineScheduledTime.propTypes = {
  infoScheduledTime: PropTypes.any,
  horario: PropTypes.string,
  horaIndisponivel: PropTypes.string,
  paciente: PropTypes.shape({}),
}

export default LineScheduledTime
