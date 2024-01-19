import React from "react"  
import '../styles/Registro.css';
import Boton from './Boton.js'
function Registro(){
    const funcion=(texto)=>{
            console.log(texto);
    };
    return (
           <div className="principal-container">
                <div className="input-parameter">
                    <label>Nombre: </label>
                    <input type="text" />
                    <label>Apellido: </label>
                    <input type="text" />
                    <label>Contraseña: </label>
                    <input type="text" />
                </div>
                <div className="buttons">
                    <Boton texto="Registro" funcion={funcion}/>
                </div>
    </div>
    );
}

export default Registro;