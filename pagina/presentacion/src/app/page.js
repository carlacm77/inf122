'use client';
import styles from "./page.module.css";
import Card from './components/card'
import Botones from './components/botones'
import Facts from './components/facts'
import Tab from './components/tab'
import Projects from './components/projects'


export default function Home() {
  const descargar=()=>{
    console.log("descargando");
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
            <Card/>
            <Facts/>
            <Botones funcionClick={descargar}/>
            <Tab/>
            <Projects/>
      </div>
    </div>
  );
}
