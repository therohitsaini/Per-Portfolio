import React from "react";

function About() {
  return (
    <div className="About-Container w-full h-full">
      <div className="About-hading-p w-full h-full flex flex-col justify-center items-center py-4  px-20 max-sm:px-2 max-sm:py-2">
        <h1 className="About-heading font-semibold text-4xl">About Me </h1>
        <div className="border border-slate-300 w-28 flex justify-center">
          <div className="border-2 border-blue-600 w-10  absolute"></div>
        </div>
        <p className="About-p w-full text-center mt-5 text-slate-600 px-64 max-sm:px-2">
        I enjoy turning ideas into reality with a perfect blend of design and functionality, focusing on best practices and the latest technologies. My goal is to constantly learn, grow, and push the boundaries of what’s possible with the web.

        </p>
        <div className="about-Detials-section w-full h-full flex max-sm:flex max-sm:flex-col-reverse py-8 ">
          <div className="img-section w-full border border-green-600  border-none">
            <img className="img object-cover max-sm:rounded-b-md" src="./images/pexels-divinetechygirl-1181269.jpg" alt="" />
          </div>
          <div className="description-about-me w-full border border-green-600 px-20 flex flex-col items-center justify-center bg-blue-400 text-white max-sm:px-2 max-sm:py-5 max-sm:rounded-t-md border-none">
            <h1 className="font-serif text-3xl  max-sm:px-2">Crafting Innovative Web Solutions with Passion & Precision</h1>
            <p className="max-sm:px-2 max-sm:mt-3">I'm a web developer passionate about creating dynamic, user-friendly, and visually stunning websites. With a keen eye for detail and a problem-solving mindset, I bring ideas to life through code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
