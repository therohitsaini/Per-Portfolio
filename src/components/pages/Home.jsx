import React from "react";
import Navbar from "../navbar/Navbar";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Element } from "react-scroll";


function Home() {
  return (
    <>

      <Navbar />
      <div >

        <HeroSection />
        <span className='sticky top-[550px]  text-red-800 flex justify-end items-end mr-5  '> <Icon icon={"logos:whatsapp-icon"} fontSize={55} className="animate-bounce " /> </span>
        <About />
        <Element name='skills'>
          <Skills />
        </Element>
        <Portfolio />
        <Contact />

      </div>
      <Footer />
    </>
  );
}

export default Home;
