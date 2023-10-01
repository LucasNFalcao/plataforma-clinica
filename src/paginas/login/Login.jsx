import { useRef } from "react"
import AreaDeTrabalho from "../area-de-trabalho/AreaDeTrabalho"

const Login = () => {

  const usuarioLogado = useRef()
  const password = useRef()

  const getUser = sessionStorage.getItem('userData')
  const getPassword = sessionStorage.getItem('passwordData')

  const handleSubmit = () => {
    if (usuarioLogado.current.value === 'Admin' && password.current.value === '123456') {
      /*
        const array = new Uint32Array(1); // Create a 32-bit unsigned integer array
        window.crypto.getRandomValues(array); // Fill the array with random values
        return array[0];
       */

      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

      sessionStorage.setItem('userData', 'Admin')
      sessionStorage.setItem('passwordData', token)
    } else {
      alert("Usuario ou senha invalidos")
    }
  }

  return (
    <section>
      {getUser && getPassword ? (<AreaDeTrabalho />)
        : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="usuario">Usuário: </label>
            <input type="text" ref={usuarioLogado} />
            <br />
            <label htmlFor="password">Senha: </label>
            <input type="password" ref={password} />
            <br />
            <input type="submit" value="Login" />
          </form>
        )}
    </section>
  )
}

export default Login
