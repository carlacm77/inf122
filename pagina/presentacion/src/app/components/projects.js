import style from './projects.module.css';
import Project from "./project"
import ProjectDone from "./projectDone"

function Projects(){
    return (
        <div className={style["project-container"]}>
            <ProjectDone proyecto="metas.png" titulo="Lista de Metas" descripcion="Landing page of SmarterTrading411 created using WordPress"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={false} proyecto="construccion.jpg"/>
            <Project gris={true} proyecto="construccion.jpg"/>
        </div>
    );
}

export default Projects;