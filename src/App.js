import { Fragment } from "react";
import "./App.css";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </Fragment>
  );
}

export default App;
