import CharacterCard from "../characterCard/index.jsx";
import CharacterPagination from "../characterPagination/index.jsx";
import styles from "./style.module.css";

export default function CharacterList({
  characters,
  currentPage,
  pagesInfo,
  onToNext,
  onToPrev,
  onToPage,
}) {
  return (
    <section className={styles.charactersContainer}>
      <div className={styles.list}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <CharacterPagination
        currentPage={currentPage}
        pagesInfo={pagesInfo}
        onToNext={onToNext}
        onToPrev={onToPrev}
        onToPage={onToPage}
      />
    </section>
  );
}
