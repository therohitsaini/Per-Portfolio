import React from 'react'
import { AnimatedCard, AnimatedLeftWrapper, AnimatedWrapper } from '../styledComponent/StyledCOmp'

function HeroSection() {
  return (
    <div className="container max-w-full border border-red-800 border-none ">
        <div className="home-section flex justify-between px-20 gap-5 bg-black text-white max-sm:flex max-sm:flex-col max-sm:px-5 max-sm:pt-20 max-sm:pb-10 max-sm:gap-14">
          <AnimatedWrapper className="hero-section w-full h-[550px] flex flex-col justify-center max-sm:h-[350px] ">
            <span className="text-5xl font-semibold max-sm:text-2xl max-sm:text-center max-sm:mb-3">
              Hi!
            </span>
            <h1 className="font-bold text-7xl flex flex-col max-sm:text-5xl max-sm:text-center">
              I’m Rohit Full
              <span>
                {" "}
                Stack <span className="text-blue-400">Developer</span>
              </span>
            </h1>
            <p className="mt-5 font-sans  text-slate-400 border-b border-slate-500 pb-1 max-sm:text-center">
              I build robust, scalable web applications from the ground up,
              specializing in both frontend and backend development. Let’s
              create something amazing together
            </p>
            <div className="btn-section mt-5 gap-5 flex max-sm:flex max-sm:justify-center">
              <a href="/skill" >
              <button className="btn p-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-md  font-semibold max-sm:p-2 max-sm:text-base">
                Download Cvv
              </button>
              </a>
              <button className="btn p-2 px-7 border-2 border-white rounded-md font-semibold  hover:border-2 hover:border-blue-500">
                {" "}
                Projects
              </button>
            </div>
          </AnimatedWrapper>
          <div className="img-section border border-blue-600 w-full flex justify-center items-center border-none ">
            <AnimatedLeftWrapper className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-full p-3  ">
              <img
                className="home-img h-[400px] w-[400px] max-sm:h-[270px] max-sm:w-[270px] rounded-full bg-black object-cover "
                src="https://img.freepik.com/free-photo/artistic-businessman_23-2147641280.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid"
              />
            </AnimatedLeftWrapper>
           
          </div>
        </div>
      </div>
  )
}

export default HeroSection