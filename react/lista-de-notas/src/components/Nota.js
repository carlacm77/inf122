import React from "react"  
import '../styles/Nota.css';
function Nota({nota,onEdit,onDelete}){
    return (
        <div className="note">
            <p className="note-text">{nota}</p> 
            <div className="button-content">
                <button className="boton-nota" onClick={onEdit}>Editar</button>
                <button className="boton-nota" onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    );
}

export default Nota;