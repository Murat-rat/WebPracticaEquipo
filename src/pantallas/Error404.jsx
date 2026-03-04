import React from 'react'
import error from '../assets/ERROR.jpg'

const Error404 = () => {
  return (
    <div>
        <h1> Error 404 - NOT FOUND </h1>
        <img src={error} alt="Página no encontrada"/>
    </div>
  )
}

export default Error404