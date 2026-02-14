import { MAX_PHRASE_LENGTH } from "../constants/config.js";

// Devuelve la frase más corta dentro del límite o un fallback
export const chooseCharacterPhrase = (phrases) => {
  if (phrases.length === 0) return "Character without phrase";

  const phrase = phrases.find((phrase) => phrase.length <= MAX_PHRASE_LENGTH);

  return phrase ? phrase : "Character without phrase";
};

// recargar pantalla
export const reload = () => window.location.reload();

// crear rango dinámico para la paginación
export const getPageRange = (currentPage, totalPages, range = 5) => {
  const start = Math.max(1, currentPage - Math.floor(range / 2));
  const end = Math.min(totalPages, start + range - 1);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
