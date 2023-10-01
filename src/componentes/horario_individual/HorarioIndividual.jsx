import PropTypes from 'prop-types'

import PerfilLinear from '../perfil_linear/PerfilLinear'
import './horarioIndividual.css'

const HorarioIndividual = ({ horarioInfo }) => {

  let { horario, temPaciente, medicoAtendendo } = horarioInfo

  return (
    <>
      {medicoAtendendo ? (
        <div>
          <span>{horario}</span>
          {temPaciente && <PerfilLinear />}
          {temPaciente === true ? (
            <div>
              <button>
                <img src="./src/assets/calendar2-week.svg" alt="" />
              </button>
              <button>
                <img src="./src/assets/trash3.svg" alt="" />
              </button>
              <button>
                <img src="./src/assets/pencil-fill.svg" alt="" />
              </button>
            </div>
          ) : (
            <button>
              <img src="./src/assets/plus-circle.svg" alt="" />
            </button>
          )}
        </div>
      ) : (
        <div>
          <span>{horario}</span>
        </div>
      )}
    </>
  )
}

HorarioIndividual.propTypes = {
  horarioInfo: PropTypes.shape({
    horario: PropTypes.string,
    temPaciente: PropTypes.bool,
    medicoAtendendo: PropTypes.bool,
  }),
}

export default HorarioIndividual
