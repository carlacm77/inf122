import React from "react"  
import '../styles/Login.css';
import Boton from './Boton.js'

function Login(){
    const funcion=(texto)=>{
            console.log(texto);
    };
   
    return (
        <div className="principal-container">
                <div className="input-parameter">
                    <label>Usuario: </label>
                    <input type="text" name="text"/>
                </div>
                <div className="input-parameter">
                    <label>Contraseña: </label>
                    <input type="text" name="text"/>
                </div>
                <div className="buttons">
                    <Boton texto="Registrar" funcion={funcion}/>
                    <Boton texto="Ingresar" funcion={funcion}/>
                    
                </div>
    </div>
    );
}

export default Login;