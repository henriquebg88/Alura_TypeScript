import Banner from "./Components/Banner";
import Header from "./Components/Header";
import MovieSection from "./Components/MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src="./Banner.png" alt={"Banner do site"} />
      <MovieSection />
    </>
  );
}

export default App;
