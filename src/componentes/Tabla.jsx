import React from 'react'
import usuarios from '../data/usuarios'

const tableStyle = {
  borderCollapse: "collapse",
  marginTop: "20px",
  fontSize: "14px"
}

const headerStyle = {
  backgroundColor: "#3e8db1",
  color: "white",
  padding: "10px"
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px"
}

function Tabla() {
  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Nombre</th>
            <th style={headerStyle}>Apellido</th>
            <th style={headerStyle}>Correo</th>
            <th style={headerStyle}>Rol</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td style={cellStyle}>{usuario.id}</td>
              <td style={cellStyle}>{usuario.nombre}</td>
              <td style={cellStyle}>{usuario.apellido}</td>
              <td style={cellStyle}>{usuario.correo}</td>
              <td style={cellStyle}>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Tabla