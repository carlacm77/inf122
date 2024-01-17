import React from "react"  
import '../styles/Lista.css';
import Nota from './Nota.js'
import {useState} from 'react';

function Lista(){
    const [notas, setNotas]= useState([]);
    const [nuevaNota, setNuevaNota]= useState('');
    const addNota=()=>{
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
      }
    
    const eliminarNota=(id)=>{
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
        
      }
    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };
    return (
        <div className="contenedor-principal">
            <input type="text" name="text" className="add-nota" value={nuevaNota} onChange={(e) => setNuevaNota(e.target.value)}/>
            <button className="boton" onClick={addNota}>Agregar Nota</button>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={editarNota}
                />
            ))}
        </div>
    );
}

export default Lista;