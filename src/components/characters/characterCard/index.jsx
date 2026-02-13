import styles from "./style.module.css";
import { IMAGE_PATH } from "../../../constants/config.js";
import { chooseCharacterPhrase } from "../../../utils/services.js";

export default function CharacterCard({ character }) {
  const { name, age, occupation, phrases, status, portrait_path } = character;

  // obtener frase
  const phrase = chooseCharacterPhrase(phrases);
  // clase para estado
  const statusClass = status === "Alive" ? styles.aliveStatus : styles.deceasedStatus;

  return (
    <div className={styles.card}>
      <header className={styles.headerCard}>
        <div className={styles.imgContent}>
          <img className={styles.imgProfile} src={`${IMAGE_PATH}${portrait_path}`} alt={name} />
        </div>

        <h3 className={styles.titleCard}>{name}</h3>

        <p className={styles.occupationCard}>{occupation}</p>
      </header>
      <footer className={styles.footerCard}>
        <div className={styles.statesContent}>
          {age && (
            <p className={styles.footerContent}>
              <strong>Age: {age}</strong>
            </p>
          )}
          <p className={`${styles.footerContent} ${statusClass}`}>
            <strong>{status}</strong>
          </p>
        </div>

        <p className={styles.phrase}>"{phrase}"</p>
      </footer>
    </div>
  );
}
