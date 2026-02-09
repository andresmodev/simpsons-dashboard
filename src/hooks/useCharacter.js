import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/apiService.js";

export const useCharacter = () => {
  // estados
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetchCharacters();
        if (!res.ok) throw new Error(`No se pudo cargar los datos, estado: ${res.status}`);

        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        console.log("Finally se ejecutó");
        setIsLoading(false);
      }
    };

    fetchApi();
  }, []);

  return { characters, isLoading, error };
};
