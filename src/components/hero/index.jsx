import Link from "../common/link/index.jsx";
import Logo from "../common/logo/index.jsx";
import styles from "./styles.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <article className={styles.heroContent}>
        <Logo variant="hero" />
        <p className={styles.paragraph}>
          Explore the world of The Simpsons with an interactive dashboard that brings together
          official information about each character. View facts, discover fun facts, and connect
          directly to the API that powers this experience.
        </p>
        <Link href="https://thesimpsonsapi.com/" newTab auxClass={styles.heroBtn}>
          Web Page API <span>↗</span>
        </Link>
      </article>
    </section>
  );
}

export default Hero;
