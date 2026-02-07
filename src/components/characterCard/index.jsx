import { IMAGE_PATH } from "../../constants/config.js";

export default function CharacterCard({ character }) {
  const { name, age, occupation, phrases, status, portrait_path } = character;

  return (
    <div>
      <img src={`${IMAGE_PATH}${portrait_path}`} alt={name} />
      <h3>{name}</h3>
      <p>{occupation}</p>
      <p>{age}</p>
      <p>{status}</p>
      <p>{phrases.at(0)}</p>
    </div>
  );
}
