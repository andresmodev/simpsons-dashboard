import Link from "../../common/link/index.jsx";
import Logo from "../../common/logo/index.jsx";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Logo variant="footer" />

      <p className={styles.paragraph}>
        An interactive frontend project built to practice and improve my skills in React, CSS
        Modules, and clean component architecture.
      </p>
      <p className={styles.paragraph}>
        Built by{" "}
        <strong>
          andresmodev |{" "}
          <Link href="https://www.linkedin.com/in/andresmodev/" newTab variant="footer">
            Linkedin
          </Link>
        </strong>
      </p>
      <div className={styles.authorship}>
        <p>
          Inspired by The Simpsons API website created by FacuG03. Character data provided by The
          Simpsons API. This project also references The Simpsons Wiki under the Creative Commons
          Attribution-ShareAlike License (CC BY-SA).
        </p>
      </div>
    </footer>
  );
}

export default Footer;
