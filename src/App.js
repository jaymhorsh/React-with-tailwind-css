import "./App.css";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Support/>
      <AllInOne/>
    </>
  );
}

export default App;
