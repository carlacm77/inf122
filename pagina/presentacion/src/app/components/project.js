import style from './project.module.css';
import Image from "next/image";

function Project({gris,proyecto}){
    return (
        <div className={style["content-card-img"]}>
            <Image className={gris ? style["image-grayscale"]: style.image} src={`/imagenes/${proyecto}`} alt="" width={362} height={226}/>
            <div className={style["content-card-img-overlay"]}></div>
        </div>         
    );
}
export default Project;

