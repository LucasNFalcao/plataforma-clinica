import PropTypes from 'prop-types'

import './historico.css'

const Historico = ({className}) => {
  return (
    <div className={`container-xx ${className}`}>
      <table className={`table`}>
        <thead>
          <tr>
            <th scope="col">Numero</th>
            <th scope="col">Paciente</th>
            <th scope="col">Data consulta</th>
            <th scope="col">Diagnóstico</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">10</th>
            <td>Mark</td>
            <td>20 de setembro de 2023</td>
            <td>Enxaqueca com prisão de ventre</td>
            <td>R$ 50,00</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Otto</td>
            <td>13 de setembro de 2023</td>
            <td>Virose: dor de cabeça com enjoo</td>
            <td>R$ 65,00</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Emily</td>
            <td>15 de setembro de 2023</td>
            <td>Possivel febre amarela</td>
            <td>R$ 70,00</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Mark</td>
            <td>20 de setembro de 2023</td>
            <td>Enxaqueca com prisão de ventre</td>
            <td>R$ 50,00</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Otto</td>
            <td>13 de setembro de 2023</td>
            <td>Virose: dor de cabeça com enjoo</td>
            <td>R$ 65,00</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Emily</td>
            <td>15 de setembro de 2023</td>
            <td>Possivel febre amarela</td>
            <td>R$ 70,00</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Emily</td>
            <td>15 de setembro de 2023</td>
            <td>Possivel febre amarela</td>
            <td>R$ 70,00</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Emily</td>
            <td>15 de setembro de 2023</td>
            <td>Possivel febre amarela</td>
            <td>R$ 70,00</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Emily</td>
            <td>15 de setembro de 2023</td>
            <td>Possivel febre amarela</td>
            <td>R$ 70,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Historico.propTypes = {
  className: PropTypes.string
}

export default Historico
