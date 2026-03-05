import React, { useContext } from 'react'
import Tabla from '../componentes/Tabla'
import User from './User'

const Admin = () => {
  return (
    <>
      <User/>
      <Tabla/>
    </>
  )
}

export default Admin