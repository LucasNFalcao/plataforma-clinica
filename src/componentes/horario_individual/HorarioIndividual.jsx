import PropTypes from 'prop-types'

import PerfilLinear from '../perfil_linear/PerfilLinear'
import './horarioIndividual.css'

const HorarioIndividual = ({ horarioInfo }) => {
  return (
    <>
      {horarioInfo?.horaIndisponivel ? (
        <div className={`horario-indisponivel ajustes-font d-flex align-items-center`}>
          <span>{horarioInfo.horaIndisponivel}</span>
        </div>
      ) : (
        <div
          className={`ajustes-font horario-disponivel d-flex align-items-center justify-content-between`}
        >
          <span>{horarioInfo?.horario ? horarioInfo.horario : horarioInfo}</span>
          {horarioInfo?.horario && <PerfilLinear paciente={horarioInfo.paciente} />}
          {horarioInfo?.horario ? (
            <div className={`buttons-ajuste d-flex align-self-end column-gap-2`}>
              <button className={`bg-white`}>
                <img className={`img-svg`} src="./src/assets/calendar2-week.svg" alt="" />
              </button>
              <button className={`bg-white`}>
                <img className={`img-svg`} src="./src/assets/trash3.svg" alt="" />
              </button>
              <button className={`bg-white`}>
                <img className={`img-svg`} src="./src/assets/pencil-fill.svg" alt="" />
              </button>
            </div>
          ) : (
            <button className={`bg-white d-flex`}>
              <img className={`img-svg`} src="./src/assets/plus-circle.svg" alt="" />
            </button>
          )}
        </div>
      )}
    </>
  )
}

HorarioIndividual.propTypes = {
  horarioInfo: PropTypes.shape({
    horario: PropTypes.string,
    horaIndisponivel: PropTypes.string,
    paciente: PropTypes.shape({}),
  }),
}

export default HorarioIndividual
