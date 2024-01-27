import style from './foto.module.css';
import Image from "next/image";

function Foto({foto}){
    return (
        <figure className={style["profile-img"]}>
            <Image src={`/imagenes/${foto}`} alt="" width={205} height={205}/>
        </figure>
    );
}
export default Foto;