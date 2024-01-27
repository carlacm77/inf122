import style from './projects.module.css';
import Image from "next/image";
import Project from "./project"


function Projects(){
    return (
        <div className={style["project-container"]}>
            <div className={style["content-card-img"]}>
                <Image className={style.image} src="/imagenes/metas.png" alt="" width={362} height={226}/>
                <div className={style["content-card-img-overlay"]}></div>
                <div className={style["content-card-img-detail"]}>
                    <p className={style.title}>Lista de Metas</p>
                    <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                    <button className={style.btn}>
                        <a href="https://www.linkedin.com/in/carla-patricia-cuevas-mamani-17a200246" target="_blank">
                            <Image src="/imagenes/link.png" alt="link" width={30} height={30}/>
                        </a>
                    </button>
                </div>
            </div>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
        </div>
    );
}

export default Projects;