"use client"
import Image from "next/image";
import style from "./pokeCard.module.css";
import { useEffect, useState } from "react";
import About from "./about";
import Stats from "./stats";

function PokeCard (){
    const [poke, setPoke]=useState("/vercel.svg");
    const [id, setId]=useState(0);
    const [nombre, setName]=useState("Esperando...");
    const [type, setType]=useState([]);
    const [height, setHeight]=useState("Esperando...");
    const [weight, setWeight]=useState("Esperando...");
    const [abilities, setAbilities]=useState([]);
    const [hp, setHp]=useState(0);
    const [attack, setAttack]=useState(0);
    const [defense, setDefense]=useState(0);
    const [speed, setSpeed]=useState(0);

    const [pokem, setPokem]= useState('pikachu');
    const [nuevoPokem, setNuevoPokem]= useState('');
    const buscar=()=>{
        setPokem(nuevoPokem);
        setNuevoPokem('');
        }
    const url=`https://pokeapi.co/api/v2/pokemon/${pokem}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPoke(data.sprites.front_default), 
        setId(data.id),
        setName(data.name),
        setHeight(data.height),
        setWeight(data.weight),
        setHp(data.stats[0].base_stat),
        setAttack(data.stats[1].base_stat),
        setDefense(data.stats[2].base_stat),
        setSpeed(data.stats[5].base_stat),
        setType(data.types),
        setAbilities(data.abilities)})
    },[pokem]);
  

    return(
        <div className={style["contenedor-principal"]}>
            <div className={style.cabeza}>
                <div className={style.titulo}>
                    <h1 className={style.title}>My Pokemon</h1>
                    <div>
                        <input type="text" value={nuevoPokem} onChange={(e) => setNuevoPokem(e.target.value)}/>
                        <button className="boton" onClick={buscar}>Buscar</button>
                    </div>
                    <h1 className={style.nombre}>{nombre}</h1>
                </div>
                <div className={style.imagen}>
                    <Image src={poke} alt="" width={300} height={300}/>
                    <p>#{id}</p>
                </div>
            </div>
            <div className={style.tipos}>
            <About type={type} height={height} weight={weight} abilities={abilities}/>
            <Stats hp={hp} attack={attack} defense={defense} speed={speed}/>
            </div>
        </div>
    );
}

export default PokeCard;