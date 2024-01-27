import style from './projects.module.css';
import Project from "./project"
import ProjectDone from "./projectDone"

function Projects(){
    return (
        <div className={style["project-container"]}>
            <ProjectDone proyecto="metas.png" titulo="Mis Metas" descripcion="Registra tus metas y controla cuantan estan pendientes o completadas"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
        </div>
    );
}

export default Projects;