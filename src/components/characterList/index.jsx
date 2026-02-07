import CharacterCard from "../characterCard/index.jsx";

export default function CharacterList({ characters }) {
  return (
    <section>
      <h2>Characters</h2>

      <div>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
