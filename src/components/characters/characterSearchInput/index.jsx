import { useCharacterContext } from "../../../context/useCharacterContext.js";
import styles from "./style.module.css";

function CharacterSearchInput() {
  const { searchValue, handleChange } = useCharacterContext();

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search">Search Character by name: </label>
      <input
        type="search"
        id="search"
        placeholder="Example: Bart Simpsons..."
        className={styles.inputSearch}
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default CharacterSearchInput;
