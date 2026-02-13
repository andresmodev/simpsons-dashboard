import Hero from "../../hero/index.jsx";
import About from "../../about/index.jsx";
import CharacterList from "../../characters/characterList/index.jsx";
import CharacterSearchInput from "../../characters/characterSearchInput/index.jsx";
import LoadingMessage from "../../states/loadingMessage/index.jsx";
import ErrorMessage from "../../states/errorMessage/index.jsx";
import ShowEmptyState from "../../states/showEmptyState/index.jsx";

import styles from "./style.module.css";

function Main({ characters, isLoading, error }) {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <h1 className={styles.title} id="characters">
        Characters
      </h1>
      <CharacterSearchInput />
      {isLoading ? (
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : characters.length === 0 ? (
        <ShowEmptyState />
      ) : (
        <CharacterList characters={characters} />
      )}
    </main>
  );
}

export default Main;
