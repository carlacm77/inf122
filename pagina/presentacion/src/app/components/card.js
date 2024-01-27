import style from './card.module.css';
import Foto from "./foto"
import Iconos from "./iconos"

function Card({nombre,cargo}){
    return (
        <div className={style.profile}>
            <Foto foto="foto.jpeg"/>
            <div className={style["profile-info"]}>
                <h1>{nombre}</h1>
                <p>{cargo}</p>
                <Iconos/>
            </div>
        </div>
    );
}

export default Card;