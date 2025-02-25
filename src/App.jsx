import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
