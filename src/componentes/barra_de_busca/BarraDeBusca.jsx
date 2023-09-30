import { useState } from 'react'
import PropTypes from 'prop-types'

import './BarraDeBusca.css'

const BarraDeBusca = ({ handleBuscarInformacao }) => {

  const [palavraDigitada, setPalavraDigitada] = useState('')

  const handleAtualizarBarraDeBusca = () => {
    handleBuscarInformacao(palavraDigitada)
    setPalavraDigitada('')
  }

  return (
    <div className={`p-3 input-group`}>
      <input
        type="search"
        value={palavraDigitada}
        className={`form-control border-secondary rounded-0`}
        placeholder="Digite sua busca"
        aria-label="Digite sua busca"
        aria-describedby="button-procurar"
        onChange={(event) => setPalavraDigitada(event.target.value)}
      />
      <button
        className={`btn btn-primary rounded-0 border-0`}
        type="button"
        id="button-procurar"
        onClick={handleAtualizarBarraDeBusca}
      >
        Buscar
      </button>
    </div>
  )
}

BarraDeBusca.propTypes = {
  handleBuscarInformacao: PropTypes.func,
}

export default BarraDeBusca
