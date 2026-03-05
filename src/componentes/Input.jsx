import React from 'react'

const inputStyle = {
  width: "250px",
  height: "25px",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "14px"
}

function Input ({type = "text", placeholder = "placeholder", evento}) {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={evento} style={inputStyle}/>
    </div>

  )
}

export default Input