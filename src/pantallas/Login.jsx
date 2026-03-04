import React, { useState, useContext } from 'react'
import Input from '../componentes/Input'
import Button from '../componentes/Button'
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../App';

function Login () {
    const navigator = useNavigate();
    const { setIsLoggedIn } = useContext(AuthenticationContext);
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    const tipo = "Admin"

    const inicioDeSesion = () => {
        if (usuario === "" || usuario === null || contraseña === "" || contraseña === null){
            alert("Por favor asegurate de llenar todos los campos")
        } else {
            setIsLoggedIn(true)
            tipo === "Admin" ? navigator("/admin") : navigator("/user")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <p>Ususario: </p>
            <Input type="text" placeholder="Ingresa tu usuario" evento={(event) => setUsuario(event.target.value)}/>
            <p>Contraseña: </p>
            <Input type="password" placeholder="Ingresa tu contraseña" evento={(event) => setContraseña(event.target.value)}/>
            <Button type="secondary" text='Iniciar Sesión' action={inicioDeSesion} />
        </div>
    )
}

export default Login