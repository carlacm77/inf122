import React from "react"  
import '../styles/Evento.css';
function Evento(){
    return (
        <div className="card-container">
            <img className="card-image" src={require("../images/evento01.jpeg")} alt="Foto del evento"/>   
            <div className="card-content">
                <h2 className="title">Py Pizza 03 - PyPuzzle</h2>
                <p className="date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="description">¡Hola Pythonista! 
                Participa en este Evento Presencial de la comunidad Python La Paz 
                ¿Cuanto conoces de Python?
                Aprende a trabajar en equipo resolviendo increibles acertijos 
                ¡Animate a ser parte de esta actividad!</p>
                <div className="icons">
                    <figure>
                        <img className="icon" src={require("../images/facebook.png")} alt=""/>
                    </figure>
                    <figure>
                        <img className="icon" src={require("../images/youtube.jpg")} alt=""/>
                    </figure>
                    <figure>
                        <img className="icon" src={require("../images/descarga.jpg")} alt=""/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Evento;