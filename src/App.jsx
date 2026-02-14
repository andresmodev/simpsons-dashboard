import { useCharacter } from "./hooks/useCharacter.js";
import Header from "./components/layout/header/index.jsx";
import Main from "./components/layout/main/index.jsx";
import Footer from "./components/layout/footer/index.jsx";

function App() {
  const {
    characters,
    isLoading,
    error,
    currentPage,
    paginationInfo,
    goToNext,
    goToPage,
    goToPrev,
  } = useCharacter();

  return (
    <>
      <Header />
      <Main
        characters={characters}
        isLoading={isLoading}
        error={error}
        currentPage={currentPage}
        pagesInfo={paginationInfo}
        onToNext={goToNext}
        onToPrev={goToPrev}
        onToPage={goToPage}
      />
      <Footer />
    </>
  );
}

export default App;
