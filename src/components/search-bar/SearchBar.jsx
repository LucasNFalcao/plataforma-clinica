import { useState } from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ handleSearchWord }) => {

  const [typedWord, setTypedWprd] = useState('')

  const handleUpdateSearchBar = () => {
    handleSearchWord(typedWord)
    setTypedWprd('')
  }

  return (
    <div className={`p-3 input-group`}>
      <input
        type="search"
        value={typedWord}
        className={`form-control border-secondary rounded-0`}
        placeholder="Digite sua busca"
        aria-label="Digite sua busca"
        aria-describedby="button-procurar"
        onChange={(event) => setTypedWprd(event.target.value)}
      />
      <button
        className={`btn btn-primary rounded-0 border-0`}
        type="button"
        id="button-procurar"
        onClick={handleUpdateSearchBar}
      >
        Buscar
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  handleSearchWord: PropTypes.func,
}

export default SearchBar
