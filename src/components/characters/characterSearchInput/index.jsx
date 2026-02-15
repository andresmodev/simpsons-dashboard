import styles from "./style.module.css";

function CharacterSearchInput({ inputValue, handleChange }) {
  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search">Search Character by name: </label>
      <input
        type="search"
        id="search"
        placeholder="Example: Bart Simpsons..."
        className={styles.inputSearch}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default CharacterSearchInput;
