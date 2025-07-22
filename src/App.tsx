import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieSection from "./Components/MovieSection";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./Banner.png" alt={"Banner do site"} />
      <MovieSection />
      <Banner src="./combo.png" alt="combo"></Banner>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
