import CharacterCard from "../characterCard/index.jsx";
import styles from "./style.module.css";

export default function CharacterList({ characters }) {
  return (
    <section className={styles.charactersContainer}>
      <div className={styles.list}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
