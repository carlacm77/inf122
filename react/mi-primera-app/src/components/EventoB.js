import React from "react"  
import '../styles/Evento.css';
function EventoB(props){
    return (
        <div className="card-container">
            <img className="card-image" src={require(`../images/${props.image}.jpeg`)} alt="Foto del evento"/>   
        <div className="card-content">
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.dateLiteral}</p>
            <p className="place">{props.placeLiteral}</p>
            <p className="description">{props.description}</p>
        </div>
    </div>
    );
}

export default EventoB;