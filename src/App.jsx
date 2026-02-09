import { useCharacter } from "./hooks/useCharacter.js";
import CharacterList from "./components/characterList/index.jsx";
import ShowEmptyState from "./components/showEmptyState/index.jsx";
import ErrorMessage from "./components/errorMessage/index.jsx";
import LoadingMessage from "./components/loadingMessage/index.jsx";

function App() {
  const { characters, isLoading, error } = useCharacter();

  return (
    <>
      <h1>SIMPSONS DASHBOARD</h1>

      {isLoading ? (
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : characters.length === 0 ? (
        <ShowEmptyState />
      ) : (
        <CharacterList characters={characters} />
      )}
    </>
  );
}

export default App;
