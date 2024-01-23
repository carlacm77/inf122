import React from 'react';
import Tablero from './Tablero';
import Historial from './Historial';
import '../styles/Juego.css';
import { useState } from 'react';

let jug=0;
let ganador="N"
//let [ganador, setGanador] = useState("N");
function Juego() {
    const [historial, setHistorial] = useState([
        {cuadros: Array(9).fill(null)},
    ]);
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [movJug, setmovJug] = useState(Array(9).fill(0));
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    
    
    
    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        const cuadros = movimientoActual.cuadros.slice();
        if (cuadros[i] === null && movJug[jug]===0) {
            
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
            jug++;
        }
        if (calcularGanador(cuadros) !== null) {
            ganador=(calcularGanador(cuadros));
            movJug[jug]=1;
        }

    }
    const saltarA = (movimiento) => {
        jug=movimiento;
        console.log("jug", jug);
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador(jug%2 === 1 ? "O" : "X");
        if(movJug[jug]===0){
            for (let ii = 0; ii <=9; ii++){
                movJug[ii]=0;
            }
            ganador="N";
        }
        if (movimiento===0){
            setHistorial([{cuadros: Array(9).fill(null)},]);
            setNroMovimiento(0);
            setmovJug(Array(9).fill(0));
            setCuadros(Array(9).fill(null));
            setJugador("X"); 
        }

    }
    const movimientoActual = historial[nroMovimiento];
    console.log("gan",ganador);
    return (
        
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ ganador !== "N" ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <Tablero cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />

        </div>
    );
}
export default Juego;
function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], // primera fila
        [3, 4, 5], // segunda fila
        [6, 7, 8], // tercera fila
        [0, 3, 6], // primera columna
        [1, 4, 7], // segunda columna
        [2, 5, 8], // tercera columna
        [0, 4, 8], // diagonal
        [2, 4, 6] // diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}