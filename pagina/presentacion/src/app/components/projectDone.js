import style from './projectDone.module.css';
import Image from "next/image";

function ProjectDone({proyecto,titulo,descripcion}){
    return (
        <div className={style["content-card-img"]}>
            <Image className={style.image} src={`/imagenes/${proyecto}`} alt="" width={362} height={226}/>
            <div className={style["content-card-img-overlay"]}></div>
            <div className={style["content-card-img-detail"]}>
                <p className={style.title}>{titulo}</p>
                <p className={style.detail}>{descripcion}</p>
                <button className={style.btn}>
                    <Image className={style["imagen-link"]} src="/imagenes/link.png" alt="link" width={20} height={20}/>
                </button>
            </div>
        </div>         
    );
}
export default ProjectDone;
