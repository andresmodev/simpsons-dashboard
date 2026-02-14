import { useEffect, useRef, useState } from "react";
import { fetchCharacters } from "../api/apiService.js";

export const useCharacter = () => {
  // estados
  const [characters, setCharacters] = useState([]); // resultados
  const [isLoading, setIsLoading] = useState(true); // carga
  const [error, setError] = useState(null); // error

  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const [paginationInfo, setPaginationInfo] = useState({}); // metadatos de la api

  const cacheRef = useRef({});

  useEffect(() => {
    if (cacheRef.current[currentPage]) {
      setCharacters(cacheRef.current[currentPage]);
    } else {
      const fetchApi = async () => {
        try {
          const res = await fetchCharacters(currentPage);
          if (!res.ok) throw new Error(`No se pudo cargar los datos, estado: ${res.status}`);

          const data = await res.json();
          const { pages, next, prev, results } = data;

          // personajes de la página actual
          setCharacters(results);
          // metadatos de la API (total, páginas, next/prev)
          setPaginationInfo({ pages, next, prev });
          // guardar en cache
          cacheRef.current[currentPage] = results;

          // prefetch siguiente página
          const nextPage = currentPage + 1;
          if (nextPage <= pages && !cacheRef.current[nextPage]) {
            const resNext = await fetchCharacters(nextPage);
            const dataNext = await resNext.json();
            cacheRef.current[nextPage] = dataNext.results;
          }
        } catch (err) {
          setCharacters([]); // reseteo de datos por si ocurre un error no mostrar datos viejos
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchApi();
    }
  }, [currentPage]);

  const goToNext = () => {
    if (currentPage < paginationInfo.pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= paginationInfo.pages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    characters,
    isLoading,
    error,
    goToNext,
    goToPage,
    goToPrev,
    paginationInfo,
    currentPage,
  };
};
