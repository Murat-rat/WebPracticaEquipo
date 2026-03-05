import React, { useState, useContext } from 'react'
import Input from '../componentes/Input'
import Button from '../componentes/Button'
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../App';
import usuarios from '../data/usuarios';

function Login () {
    const navigator = useNavigate();
    const { setAuthentication } = useContext(AuthenticationContext);
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    const inicioDeSesion = () => {
        if (usuario === "" || usuario === null || contraseña === "" || contraseña === null){
            alert("Por favor asegurate de llenar todos los campos")
            return;
        } 
        
        const usuarioEncontrado = usuarios.find(
            (u) => u.nombre === usuario && u.contrasenia === contraseña
        );

        if (!usuarioEncontrado) {
            alert("Correo o contraseña incorrectos");
            return;
        }

        setAuthentication({
            isLoggedIn : true,
            user : usuarioEncontrado
        });

        if (usuarioEncontrado.rol === "Admin") {
            navigator("/admin");
        } else {
            navigator("/user");
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