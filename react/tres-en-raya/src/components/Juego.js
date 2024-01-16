import React from "react"  
import '../styles/Juego.css';
import Tablero from './Tablero'
import {useState} from 'react';
function Juego(){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    const cuadrosTemp=[...cuadros];
    const click=(i)=>{
        if (cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);  
            setJugador(jugador==="X"? "O":"X" );
        }
    }
    return (
        <Tablero cuadros={cuadros} onclick={click}/>

    )

}

export default Juego;
