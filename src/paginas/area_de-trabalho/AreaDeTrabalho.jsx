import { useState } from 'react'

import './AreaDeTrabalho.css'

import BarraDeBusca from '../../componentes/barra_de_busca/BarraDeBusca'
import Calendario from '../../componentes/calendario/Calendario'
import ListaPacientes from '../../componentes/lista_pacientes/ListaPacientes'
import Historico from '../../componentes/historico/Historico'
import MenuRolagem from '../../componentes/menu_de_rolagem/MenuRolagem'

const AreaDeTrabalho = () => {

  const [buscarInformacao, setBuscarInformacao] = useState('')
  console.log('area de trabalho', buscarInformacao)

  return (
    <div className={`grid-container`}>
      <section>
        <BarraDeBusca handleBuscarInformacao={setBuscarInformacao}
          className={'item-busca'} />
        <MenuRolagem className={'item-lembrete'} />
        <Historico className={'item-historico'} />
      </section>
      <section>
        <Calendario className={'item-calendario'} />
        <ListaPacientes className={'item-lista'} />
      </section>
    </div>
  )
}

export default AreaDeTrabalho
