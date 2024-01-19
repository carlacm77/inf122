import React from "react"  
import '../styles/Perfil.css';
import Boton from './Boton.js'
function Perfil(){
    const funcion=(texto)=>{
            console.log(texto);
    };
    return (
           <div className="principal-container">
                <div className="input-parameter">
                    <label>Nombre: </label>
                    <input type="text" placeholder="Pepito" />
                    <label>Apellido: </label>
                    <input type="text" placeholder="Perez"/>
                    <label>Contraseña: </label>
                    <input type="text" placeholder="********"/>
                </div>
                <div className="buttons">
                    <Boton texto="Editar" funcion={funcion}/>
                </div>
    </div>
    );
}

export default Perfil;