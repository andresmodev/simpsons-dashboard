import { useCharacterContext } from "../../../context/useCharacterContext.js";
import CharacterCard from "../characterCard/index.jsx";
import CharacterPagination from "../characterPagination/index.jsx";
import styles from "./style.module.css";

export default function CharacterList() {
  const { filteredCharacters } = useCharacterContext();

  return (
    <section className={styles.charactersContainer}>
      <div className={styles.list}>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <CharacterPagination />
    </section>
  );
}
