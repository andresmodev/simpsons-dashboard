import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/apiService.js";

export const useCharacter = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetchCharacters();
        if (!res.ok) throw new Error(`No se pudo cargar los datos, estado: ${res.status}`);

        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchApi();
  }, []);

  return { characters };
};
