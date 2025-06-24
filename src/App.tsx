import Banner from "./Components/Banner";
import Link from "./Components/Link";

function App() {
  return (
    <>
      <Banner src="./Banner.png" alt={"Banner do site"} />
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  );
}

export default App;
