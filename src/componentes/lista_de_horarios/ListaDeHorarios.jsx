import HorarioIndividual from '../horario_individual/HorarioIndividual'

import './listaDeHorarios.css'

const ListaDeHorarios = () => {

  const mockup_lista_horarios = [
    {
      horario: '08:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '08:30',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '09:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '09:30',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '10:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '10:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '11:00',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '11:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '12:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '12:30',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '13:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '13:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '14:00',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '14:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '15:00',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '15:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '16:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '16:30',
      temPaciente: true,
      medicoAtendendo: true,
    },
    {
      horario: '17:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '17:30',
      temPaciente: false,
      medicoAtendendo: true,
    },
    {
      horario: '18:00',
      temPaciente: false,
      medicoAtendendo: true,
    },
  ]

  return (
    <div>
      <ul className={`list-group`}>
        {mockup_lista_horarios.map((horario, index) => {
          return <li className={`list-group-item`} key={index}>
            <HorarioIndividual horarioInfo={horario} />
          </li>
        })
          }
      </ul>
    </div>
  )
}

export default ListaDeHorarios
