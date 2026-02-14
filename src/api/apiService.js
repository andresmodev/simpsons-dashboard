import { CHARACTERS_ENDPOINT } from "../constants/config.js";

export const fetchCharacters = async (page = 1) => {
  const response = await fetch(`${CHARACTERS_ENDPOINT}?page=${page}`);
  return response;
};
