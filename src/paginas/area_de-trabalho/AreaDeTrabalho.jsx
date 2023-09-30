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
    <div className={`d-flex mx-3`}>
      <section className={`col-6 p-2 row-gap-3 section-lateral`}>
        <BarraDeBusca handleBuscarInformacao={setBuscarInformacao} />
        <MenuRolagem />
        <Historico />
      </section>
      <section className={`col-6 p-2 row-gap-3 section-lateral`}>
        <Calendario />
        <ListaPacientes />
      </section>
    </div>
  )
}

export default AreaDeTrabalho
