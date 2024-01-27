import style from './card.module.css';
import Foto from "./foto"
import Iconos from "./iconos"

function Card(){
    return (
        <div className={style.profile}>
            <Foto/>
            <div className={style["profile-info"]}>
                <h1>Victor Alvarado</h1>
                <p>Software Engineer</p>
                <Iconos/>
            </div>
        </div>
    );
}

export default Card;