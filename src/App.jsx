import { useCharacter } from "./hooks/useCharacter";
import CharacterList from "./components/characterList/index.jsx";

function App() {
  const { characters } = useCharacter();

  return (
    <>
      <h1>SIMPSONS DASHBOARD</h1>
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
