import { createContext } from "react";
import { useCharacter } from "../hooks/useCharacter.js";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const characterHook = useCharacter();

  return <CharacterContext.Provider value={characterHook}>{children}</CharacterContext.Provider>;
};

export default CharacterContext;
