import React from 'react'

const Input = ({type = "text", placeholder = "placeholder", evento}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={evento} />
    </div>

  )
}

export default Input