import React from "react"  
import '../styles/Cuadro.css';

function Cuadro({valor,funcionClick}){
    return (
        <button className="cuadro" onClick={funcionClick}> 
        {valor}
        </button>
    );
}

export default Cuadro;