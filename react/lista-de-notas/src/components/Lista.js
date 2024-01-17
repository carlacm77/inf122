import React from "react"  
import '../styles/Lista.css';
import Nota from './Nota.js'
import {useState} from 'react';

function Lista(){
    const [notas, setNotas]= useState([]);
    const [texto, setTexto]= useState("");
    const addNota=()=>{
        setNotas([...notas, texto])
        console.log(notas);

      }
    const onEdit=()=>{
        console.log("edit");
      }
    const onDelete=()=>{
        console.log("delete");
      }
    return (
        <div className="lista-de-notas">
            <input type="text" name="text" className="add-nota" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <button className="boton-nota" onClick={addNota}>Agregar Nota</button>
        <div className="note">
            
            <Nota nota="Hola" onEdit={onEdit} onDelete={onDelete}/>
        </div>
        </div>
    );
}

export default Lista;