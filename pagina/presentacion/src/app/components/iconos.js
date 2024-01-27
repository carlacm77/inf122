import style from './iconos.module.css';
import Image from "next/image";

function Iconos(){
    return (
        <div className={style["profile-social"]}>
            <a href="https://github.com/carlacm7" target="_blank">
                <Image src="/imagenes/github.png" alt="github"  width={36} height={36}/>
            </a>
            <a href="https://twitter.com" target="_blank">
                <Image src="/imagenes/twitter.png" alt="twitter"  width={36} height={36}/>
            </a>
            <a href="https://www.linkedin.com/in/carla-patricia-cuevas-mamani-17a200246" target="_blank">
                <Image src="/imagenes/linkedin.png" alt="in" width={36} height={36}/>
            </a>
            <a href="https://youtube.com" target="_blank">
                <Image src="/imagenes/youtube.png" alt="youtube" width={36} height={36}/>
            </a>
        </div>
       
    );
}

export default Iconos;