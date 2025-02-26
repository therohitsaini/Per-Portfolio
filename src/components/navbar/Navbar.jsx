import React, { useState } from "react";
// import './App.css'
import { Icon } from "@iconify/react";

function Navbar() {
  const [toggleBtn, setToggleBtn] = useState(false)
  // const toggleBtnHandler = () =>{
  //   if(!toggleBtn){
  //     setToggleBtn(true)
  //   }
  // }
  console.log(toggleBtn)
  return (
    <>
 
      <header className="header w-full sticky top-0 px-20 bg-black max-sm:px-2 z-40 ">
        <nav className="navbar flex justify-between items-center   text-white p-2  border-b border-slate-600 max-sm:py-4 ">
          <h1 className="font-semibold text-xl">PORTFOLIO</h1>
          <ul className="un-order-list flex gap-14 font-semibold max-sm:hidden" >
            <li><a  href="#">HOME</a></li>
            <li><a href="#" >ABOUT</a></li>
            <li><a href="#">SKILL</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">SERVICE</a></li>
            <li><a href="#">CONTACT</a></li>
        
          </ul>
          <button className="nav-btn  bg-blue-600 px-4 p-2 font-semibold text-lg rounded-md max-sm:hidden">Get Started</button>
          <div className="md:hidden"
          onClick={() => setToggleBtn(!toggleBtn)}
          >
            {toggleBtn ? 
          <div className="text-3xl"><Icon icon="basil:cross-outline" /></div> 
          : 
          <div className="text-3xl"><Icon icon="mage:align-right" /></div>}</div>
      
        </nav>

        {/* <nav className="res-nav  max-sm:border  max-sm:border-red-600  max-sm:p-2  max-sm:absolute  max-sm:mt-[-60px]  max-sm:h-full w-full"></nav> */}
      </header>
      
      <header className="absolute w-full h-96 border border-blue-600   mt-10 p-2 border-none">
        {toggleBtn == true ? 
          <nav className="res-nav w-full h-96 text-white border flex  justify-center items-center border-slate-300 rounded-md bg-black ">
          <ul className="un-order-list-resp w-full flex flex-col justify-center items-center gap-5 ">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Portfolio</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </nav>
        : <div></div>
        }
      </header>
    </>
  );
}

export default Navbar;
