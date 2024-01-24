import Image from "next/image";
import styles from "./page.module.css";
import Dogs from './components/dogs.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <Dogs/>
    </main>
  );
}
