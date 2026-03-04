import React, { useContext } from 'react'
import Button from '../componentes/Button'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../App'

const User = () => {
  const navigator = useNavigate();
  const { setIsLoggedIn } = useContext(AuthenticationContext);

  const cerrarSesion = () => {
    setIsLoggedIn(false);
    navigator("/")
  }
  return (
    <>
        <h1>User</h1>
        <hr />
        <Button text='Cerrar Sesión' action={cerrarSesion}/>
    </>
  )
}

export default User