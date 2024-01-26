

import style from "./about.module.css";


function About ({type,height,weight,abilities}){
  

    return(
        <div className={style.about}>
            <h2>About</h2>
            <hr widht={400}/>
            <div className={style.container}>
                <div className={style.atributo}>
                    <p >Type</p>
                    <p >Height</p>
                    <p >Height</p>
                    <p >Abilities</p>
                </div>    
                <div className={style.caract}>
                    <div className={style.type}>{type.map((ty)=>(<p>{ty.type.name}, </p>))}</div>
                    <p>{height} m</p>
                    <p>{weight} kg</p>
                    <div className={style.type}>{abilities.map((ab)=>(<p>{ab.ability.name}, </p>))}</div>

                </div>
            </div>
        </div>
    );
}

export default About;