"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useState, useEffect } from "react";

function Foto(){
    const [perrito, setPerrito]=useState("/vercel.svg")
    const url="https://dog.ceo/api/breed/waterdog/spanish/images/random";

    useEffect(()=>{                               
        fetch(url).then(res=>res.json()).then(data=>{setPerrito(data.message)})                                         
    },[]);

    return(
        <div className={style.contenedor}>
            <Image src={perrito} alt="" width={250} height={250}/>
        </div>
    );
}

export default Foto;