import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Portfolio() {
  const [hoverEffect, setHoverEffect] = useState(false);
  const hoverHandle = () => {
    setHoverEffect(true);
  };

  const hoverHandleLeave = () => {
    setHoverEffect(false);
  };
  console.log(hoverEffect);

  return (
    <div className="Portfolio-container ">
      <div className="portfolio-heading w-full flex justify-center items-center my-5 flex-col">
        <h1 className="font-semibold text-4xl my-1 ">Portfolio</h1>
        <div className="border border-slate-300 w-28 flex justify-center ">
          <div className="border-2 border-blue-600 w-10  absolute"></div>
        </div>
        <p className="px-72 text-center my-4 text-slate-600  mb-6 max-sm:mb-1 max-sm:px-2">
          {" "}
          Here are a few of the projects I’ve worked on. Each one highlights my
          commitment to clean code, responsive design, and user experience
        </p>

        <div className="portfolio-projects border border-blue-700 w-full h-full flex gap-7 px-20 max-sm:px-5  max-sm:flex max-sm:flex-col  border-none  pb-20 max-sm:py-10">
          <div className="border border-red-800 w-full border-none bg-black rounded-t-md ">
            <div className="project flex justify-between items-center p-2 bg-blue-500 rounded-t-md">
              <p className="font-semibold text-white">See more</p>
              {/* <p>About Project</p> */}
              <div className="icone border-2  text-2xl rounded-full p-2 text-white mr-2 max-sm:my-2 ">
                <Icon icon="solar:course-up-broken" />
              </div>
            </div>
            <img
              className="object-contain h-full w-full max-sm:px-4 max-sm:object-contain "
              src="./images/Screenshot 2025-01-21 192715.png"
            />
          </div>
          <div className="border border-red-800 w-full border-none bg-black rounded-t-md max-sm:px-2">
            <div className="p-2 flex justify-between items-center pr-5 bg-blue-500 rounded-t-md ">
              <p className="font-semibold text-white">See more</p>

              {/* <p>About Project</p> */}
              <div className="icone border-2 text-2xl rounded-full p-2 text-white  max-sm:my-2 ">
                <Icon icon="solar:course-up-broken" />
              </div>
            </div>
            <img
              className="object-contain h-full w-full max-sm:px-2 max-sm:object-contain"
              src="./images/Screenshot 2025-01-18 113351.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
