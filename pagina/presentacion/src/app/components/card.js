import style from './card.module.css';
import Foto from "./foto"
import Iconos from "./iconos"

function Card(){
    return (
        <div className={style.profile}>
            <Foto/>
            <div className={style["profile-info"]}>
                <h1>Carla Cuevas</h1>
                <p>Super Juninor Front-end Dev</p>
                <Iconos/>
            </div>
        </div>
    );
}

export default Card;