import { useCharacter } from "./hooks/useCharacter.js";
import Header from "./components/layout/header/index.jsx";
import Main from "./components/layout/main/index.jsx";
import Footer from "./components/layout/footer/index.jsx";

function App() {
  const {
    filteredCharacters,
    isLoading,
    error,
    currentPage,
    paginationInfo,
    goToNext,
    goToPage,
    goToPrev,
    searchValue,
    handleChange,
  } = useCharacter();

  return (
    <>
      <Header />
      <Main
        characters={filteredCharacters}
        isLoading={isLoading}
        error={error}
        currentPage={currentPage}
        pagesInfo={paginationInfo}
        onToNext={goToNext}
        onToPrev={goToPrev}
        onToPage={goToPage}
        inputValue={searchValue}
        handleChange={handleChange}
      />
      <Footer />
    </>
  );
}

export default App;
