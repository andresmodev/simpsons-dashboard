import CharacterList from "./characterList/index.jsx";
import CharacterSearchInput from "./characterSearchInput/index.jsx";
import LoadingMessage from "../states/loadingMessage/index.jsx";
import ErrorMessage from "../states/errorMessage/index.jsx";
import ShowEmptyState from "../states/showEmptyState/index.jsx";
import styles from "./style.module.css";
import { useCharacterContext } from "../../context/useCharacterContext.js";

function Character() {
  const { filteredCharacters, isLoading, error } = useCharacterContext();

  return (
    <section>
      <h1 className={styles.title} id="characters">
        Characters
      </h1>

      <CharacterSearchInput />
      {isLoading ? (
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : filteredCharacters.length === 0 ? (
        <ShowEmptyState />
      ) : (
        <CharacterList />
      )}
    </section>
  );
}

export default Character;
