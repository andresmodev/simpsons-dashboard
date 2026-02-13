import styles from "./style.module.css";

function CharacterSearchInput() {
  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search">Search Character by name: </label>
      <input
        type="search"
        id="search"
        placeholder="Example: Bart Simpsons..."
        className={styles.inputSearch}
      />
    </div>
  );
}

export default CharacterSearchInput;
