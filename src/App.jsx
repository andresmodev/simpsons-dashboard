import { CharacterProvider } from "./context/CharacterContext.jsx";
import Header from "./components/layout/header/index.jsx";
import Main from "./components/layout/main/index.jsx";
import Footer from "./components/layout/footer/index.jsx";

function App() {
  return (
    <>
      <CharacterProvider>
        <Header />
        <Main />
        <Footer />
      </CharacterProvider>
    </>
  );
}

export default App;
