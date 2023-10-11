import PropTypes from 'prop-types'

import './modalUser.css'

const ModalUser = ({ open, setIsOpen, valueModal }) => {
  return (
    <div className={`modal-container`}>
      {open &&
        (typeof valueModal === 'string' ? (
          <div
            className={`d-flex flex-column align-items-center
          justify-content-center h-100`}
          >
            <form
              className={`d-flex flex-column align-items-center
            justify-content-center bg-white form-container my-3 py-4`}
            >
              <legend className={`fs-1 fw-bolder text-black text-center mt-4`}>
                Dados do Paciente
              </legend>
              <div className={`column-gap-3 values-inputs`}>
                <label className={`label-form-modal`} htmlFor="nome">Nome</label>
                <input className={`input-modal`} type="text" name="nome" id="nome" />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="idade">Idade</label>
                <input className={`input-modal`} type="number" name="idade" id="idade" />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="cpf">CPF</label>
                <input className={`input-modal`} type="text" name="cpf" id="cpf" />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="dtnascimento">Data de Nascimento</label>
                <input
                  className={`input-modal`}
                  type="text"
                  name="dtnascimento"
                  id="dtnascimento"
                />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="endereco">Endereço</label>
                <input className={`input-modal`} type="text" name="endereco" id="endereco" />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="tiposangue">Tipo sanguineo</label>
                <input
                  className={`input-modal`}
                  type="text"
                  name="tipo_sanguineo"
                  id="tiposangue"
                />
              </div>
              <div className={`column-gap-3 values-inputs`}>
                <label htmlFor="pagamento">Forma de Pagamento</label>
                <input className={`input-modal`} type="text" name="pagamento" id="pagamento" />
              </div>
            </form>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
            <button>Agendar Consulta</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
            <button>Atualizar Consulta</button>
          </div>
        ))}
    </div>
  )
}

ModalUser.propTypes = {
  open: PropTypes.bool,
  valueModal: PropTypes.any,
  setIsOpen: PropTypes.func,
}

export default ModalUser
