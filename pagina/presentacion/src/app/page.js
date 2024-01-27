
import styles from "./page.module.css";
import Card from './components/card'
import Botones from './components/botones'
import Facts from './components/facts'
import Tab from './components/tab'
import Projects from './components/projects'


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
            <Card/>
            <Facts/>
            <Botones/>
            <Tab/>
            <Projects/>
      </div>
    </div>
  );
}
