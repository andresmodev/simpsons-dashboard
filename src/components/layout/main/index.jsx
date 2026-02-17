import Hero from "../../hero/index.jsx";
import About from "../../about/index.jsx";
import styles from "./style.module.css";
import Character from "../../characters/index.jsx";

function Main() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Character />
    </main>
  );
}

export default Main;
