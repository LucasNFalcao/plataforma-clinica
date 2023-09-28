
const BarraDeBusca = () => {
  return (
    <div className={`input-group my-3`}>
      <input
        type="email"
        className={`form-control border-secondary rounded-0`}
        placeholder="Digite sua busca"
        aria-label="Digite sua busca"
        aria-describedby="button-procurar"
      />
      <button
        className={`btn btn-primary rounded-0 border-0`}
        type="button"
        id="button-procurar"
      >
        Buscar
      </button>
    </div>
  )
}

export default BarraDeBusca
