"use client"

import style from "./dogs.module.css";
import Image from "next/image";
import {useState, useEffect} from "react";

function Dogs(){
    const [dog, setDog]=useState("/vercel.svg");
    const url="https://dog.ceo/api/breed/waterdog/spanish/images/random";
    useEffect(()=>{                               /*con el useeffect cuando se actualice la pagina recien se hace el reuest, el useefect espera una accion para hacer algo*/
        fetch(url)                                /*busca el url, request*/
        .then(res=>res.json())                    /*recuperamos la respuesta del request del jason*/
        .then(data=>{                             /*y de ese data accedemos al mesange solo el atributo que queremos*/
            setDog(data.message)
        })                                         
    },[])

    return (
        <div className={style.box}>
            <h1 className={style.title}>Dogs</h1>
            <Image className={style.imagen} src={dog} alt="dog" width={500} height={500}/>
        </div>
        
    );
}

export default Dogs;