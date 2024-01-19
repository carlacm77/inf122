import React from "react"  
import '../styles/Galeria.css';

function Galeria(){
    return (
        <div className="container">
            <div className="encabezado">
                <figure>
                    <img className="icon" src={require("../images/imagen.png")} alt=""/>
                </figure>
                <h2>
                    Pepito
                </h2>
            </div>
            <div className="images-container">
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
                <img className="icon" src={require("../images/imagen.png")} alt=""/>
            </div>
        </div>    
       
    );
}

export default Galeria;
