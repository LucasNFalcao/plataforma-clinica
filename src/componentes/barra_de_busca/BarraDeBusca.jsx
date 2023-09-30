import { useState } from 'react'
import PropTypes from 'prop-types'

const BarraDeBusca = ({ handleBuscarInformacao, className }) => {

  const [palavraDigitada, setPalavraDigitada] = useState('')

  const handleAtualizarBarraDeBusca = () => {
    handleBuscarInformacao(palavraDigitada)
    setPalavraDigitada('')
  }

  return (
    <div className={`my-3 ${className}`}>
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
  className: PropTypes.string,
}

export default BarraDeBusca
