import React from "react"  
import '../styles/Boton.css';

function Boton({texto, funcion}){
    return (
        <button className="boton" onClick={() => funcion(texto)}> 
        {texto}
        </button>
    );
}

export default Boton;
