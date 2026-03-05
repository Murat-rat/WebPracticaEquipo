import React, { useContext } from 'react'
import Button from '../componentes/Button'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../App'

const User = () => {
  const navigator = useNavigate();
  const { authentication, setAuthentication } = useContext(AuthenticationContext);

  const cerrarSesion = () => {
    setAuthentication({
      isLoggedIn : false,
      user : null
    });
    navigator("/")
  }
  return (
    <>
        <h1>User</h1>
        <hr />
        <p>Hola {authentication.user.nombre}</p>
        <Button text='Cerrar Sesión' action={cerrarSesion}/>
    </>
  )
}

export default User