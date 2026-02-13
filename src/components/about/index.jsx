import Icon from "../common/icon/index.jsx";
import styles from "./style.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h2 className={styles.title}>About</h2>

      <article className={styles.cardParagraph}>
        <h3 className={styles.cardTitle}>Why This Project?</h3>

        <p className={styles.cardText}>
          I built this project to strengthen my frontend skills. Along the way, I learned more about
          folder architecture, responsibility delegation, and the Git/GitHub workflow, which helped
          me improve both my code organization and collaboration practices.
        </p>
      </article>

      <article className={styles.cardParagraph}>
        <h3 className={styles.cardTitle}>Stack/Technologies</h3>

        <p className={styles.cardText}>
          This project was developed using React for the UI, CSS Modules for styling, and a clean
          component architecture to ensure scalability and maintainability.
        </p>

        <section className={styles.cardContainerStack}>
          <div className={styles.stack}>
            <Icon type="react" className={styles.iconStack} />
            <span>React</span>
          </div>
          <div className={styles.stack}>
            <Icon type="css" className={styles.iconStack} />
            <span>Css</span>
          </div>
          <div className={styles.stack}>
            <Icon type="git" className={styles.iconStack} />
            <span>Git</span>
          </div>
          <div className={styles.stack}>
            <Icon type="githubDynamic" className={styles.iconStack} />
            <span>GitHub</span>
          </div>
          <div className={styles.stack}>
            <Icon type="vite" className={styles.iconStack} />
            <span>Vite</span>
          </div>
        </section>
      </article>

      <article className={styles.cardParagraph}>
        <h3 className={styles.cardTitle}>Attribution</h3>

        <p className={styles.cardText}>
          This project is inspired by The Simpsons API website. All character data is provided by
          the official API, and I would like to acknowledge its creator for making this resource
          available to fans and developers.
        </p>
      </article>
    </section>
  );
}

export default About;
