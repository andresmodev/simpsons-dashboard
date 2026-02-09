import styles from "./style.module.css";
import { IMAGE_PATH } from "../../constants/config.js";
import { chooseCharacterPhrase } from "../../utils/services.js";

export default function CharacterCard({ character }) {
  const { name, age, occupation, phrases, status, portrait_path } = character;

  // obtener frase
  const phrase = chooseCharacterPhrase(phrases);

  return (
    <div className={styles.card}>
      <header className={styles.headerCard}>
        <img className={styles.imgProfileCard} src={`${IMAGE_PATH}${portrait_path}`} alt={name} />
        <h3 className={styles.titleCard}>{name}</h3>
        <p className={styles.occupationCard}>{occupation}</p>
      </header>
      <footer className={styles.footerCard}>
        <p>{age}</p>
        <p>{status}</p>
        <p>{phrase}</p>
      </footer>
    </div>
  );
}
