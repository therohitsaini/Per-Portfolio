import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;