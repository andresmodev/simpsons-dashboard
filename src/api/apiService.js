import { CHARACTERS_ENDPOINT } from "../constants/config.js";

export const fetchCharacters = async () => {
  const response = await fetch(CHARACTERS_ENDPOINT);
  return response;
};
