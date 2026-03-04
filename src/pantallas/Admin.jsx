import React, { useContext } from 'react'
import Tabla from '../componentes/Tabla'
import Button from '../componentes/Button'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../App'

const Admin = () => {
  const navigator = useNavigate();
  const { setIsLoggedIn } = useContext(AuthenticationContext)

  const cerrarSesion = () => {
    setIsLoggedIn(false);
    navigator("/")
  }
  return (
    <>
    <h1>Administrador</h1>
    <hr />
    <Tabla />
    <Button text='Cerrar Sesión' action={cerrarSesion}/>
    </>
  )
}

export default Admin