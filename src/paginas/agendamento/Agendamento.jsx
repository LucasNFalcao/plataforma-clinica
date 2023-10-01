import './agendamento.css'

import Calendario from '../../componentes/calendario/Calendario'
import ListaPacientes from '../../componentes/lista_pacientes/ListaPacientes'
import ListaDeHorarios from '../../componentes/lista_de_horarios/ListaDeHorarios'

const Agendamento = () => {
  return (
    <div className={`d-flex p-3 agendamento-container`}>
      <div className={`col-6`}>
        <ListaPacientes />
        <Calendario />
      </div>
      <div className={`col-6`}>
        <ListaDeHorarios />
      </div>
    </div>
  )
}

export default Agendamento
