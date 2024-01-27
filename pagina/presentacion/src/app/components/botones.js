'use client';
import style from './botones.module.css';
import Image from "next/image";

function Botones(){

    const download=()=>{
        console.log("Downloading Document");
    }

    return (
        <div className={style.buttons}>
            <button className={style["btn-primary"]} onclick={download}>
                <div className={style["btn-content"]}>
                    <p>Download CV</p>
                    <Image src="/imagenes/download.png" alt="arrow"  width={36} height={36} className={style["btn-primary-img"]}/>
                </div>
            </button>
            <a className={style["btn-secondary"]} href="mailto:contact@me.com">
                <div className={style["btn-content"]}>
                    <p>Contact me</p>
                </div>
            </a>
        </div>
    );
}
export default Botones;