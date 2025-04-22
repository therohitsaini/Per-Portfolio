import React from "react";
import { AnimatedLeftWrapper, AnimatedWrapper } from "../styledComponent/StyledCOmp";

function About() {
  return (
    <div className="About-Container w-full h-full">
      <div className="About-hading-p w-full h-full flex flex-col justify-center items-center py-  px-20 max-sm:px-2 max-sm:py-2 ">
        <AnimatedLeftWrapper className="About-heading font-semibold text-4xl">About Me </AnimatedLeftWrapper>
        <AnimatedLeftWrapper className="border border-slate-300 w-28 flex justify-center">
          <div className="border-2 border-blue-600 w-10  absolute"></div>
        </AnimatedLeftWrapper>
        <AnimatedLeftWrapper className="About-p w-full text-center mt-5 text-slate-600 px-64 max-sm:px-2">
        I enjoy turning ideas into reality with a perfect blend of design and functionality, focusing on best practices and the latest technologies. My goal is to constantly learn, grow, and push the boundaries of what’s possible with the web.

        </AnimatedLeftWrapper>
        <AnimatedWrapper className="about-Detials-section w-full h-full flex max-sm:flex max-sm:flex-col-reverse my-10 rounded-t-md ">
          <div className="img w-full h-[400px] border border-green-600  border-none">
            <img className=" object-contain h-full w-full max-sm:rounded-b-md rounded-tl-md" src="https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-1812.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid" alt="" />
          </div>
          <div className="description-about-me w-full border border-green-600 px-20 flex flex-col items-center justify-center bg-blue-400 text-white max-sm:px-2 max-sm:py-5 max-sm:rounded-t-md border-none rounded-tr-md">
            <h1 className="font-serif text-3xl  max-sm:px-2">Crafting Innovative Web Solutions with Passion & Precision</h1>
            <p className="max-sm:px-2 max-sm:mt-3">I'm a web developer passionate about creating dynamic, user-friendly, and visually stunning websites. With a keen eye for detail and a problem-solving mindset, I bring ideas to life through code</p>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

export default About;
