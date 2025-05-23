import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styled, { keyframes, css } from "styled-components";


const progressKeyframe = (range) => keyframes`
0%{
width: 50%;
  }
  100%{
      width: ${range}%;
  }`;

const ProgressBar = styled.div`
width: ${(props) => props.range ?? 20}%;
max-height: 2rem;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;

padding: 5px 0px;
background-color: rgb(218, 222, 223);
${(props) =>
  props.range &&
  css`
    animation: ${progressKeyframe(props.range)} 2s forwards;
  `};
`;

function Skills() {
  const [isCardhover, setIscardHover] = useState(false);
  const [isCardhover_1, setIscardHover_1] = useState(false);



  const Button = styled.button`
    background-color: black;
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    color: white;
    margin-top : 1rem;
    font-size: 17px;
    
    
  `;
  const handleCardHover = () => {
    setIscardHover(true);
  };
  // console.log(isCardhover);
  const handleCardLeave = () => {
    setIscardHover(false);
  };
  const handleCardHover_1 = () => {
    setIscardHover_1(true);
  };
  // console.log(isCardhover);
  const handleCardLeave_1 = () => {
    setIscardHover_1(false);
  };
  return (
    <div className="container border border-red-500 max-w-full  border-none bg-slate-100 py-4">
      <div className="skill flex flex-col justify-center items-center w-full my-3">
        <h2 className="font-semibold text-3xl mb-1">Our Technology </h2>
        <div className="border border-slate-300 w-28 flex justify-center">
          <div className="border-2 border-blue-600 w-10  absolute"></div>
        </div>
        <p className="mt-5 px-72 text-center mb-5 text-slate-600 font-sans max-sm:px-2">
          Expert in HTML, CSS, Tailwind CSS, JavaScript, React, Node.js,
          Express.js, MongoDB, and WordPress, specializing in API development,
          authentication, performance optimization, state management, and
          scalable full-stack architectures
        </p>
      </div>
      <div className="skill-ui-ux flex gap-4 px-20 mb-4 max-sm:flex max-sm:flex-col max-sm:px-5">
        <div className="border border-slate-300  w-[70%]  flex items-center max-sm:w-full px-3 rounded-md max-sm:py-4 bg-white">
          <div className="w-full flex flex-col gap-2 font-semibold ">
            <p className="border border-slate-300  rounded-md  w-full flex justify-between items-center  ">
              <ProgressBar
                range={90}
                className="flex justify-between items-center"
              >
                <p className="pl-2">html/Css</p>{" "}
                <div className="p text-sm">90%</div>
              </ProgressBar>
              <div className="text-xl px-2 ">
                <Icon icon="skill-icons:html" />
              </div>
            </p>

            <p className="border border-slate-300  rounded-md  py- flex justify-between items-cente">
              <ProgressBar
                range={90}
                className="flex justify-between items-center"
              >
                <p className="pl-2">Tailwind Css</p>{" "}
                <div className="p text-sm">90%</div>
              </ProgressBar>
              <div className="text-xl flex justify-center items-center px-2">
                <Icon icon="skill-icons:tailwindcss-dark" />
              </div>
            </p>

            <p className="border border-slate-300rounded-md  py- flex justify-between items-cente">
              <ProgressBar
                range={60}
                className="flex justify-between items-center"
              >
                <p className="pl-2">Wordpress</p>{" "}
                <div className="p text-sm">60%</div>
              </ProgressBar>
              <div className="text-2xl flex justify-center items-center px-2">
                <Icon icon="material-icon-theme:folder-wordpress-open" />
              </div>
            </p>

            <p className="border border-slate-300rounded-md  py- flex justify-between items-cente">
              <ProgressBar
                range={90}
                className="flex justify-between items-center"
              >
                <p className="pl-2">Javascript </p>{" "}
                <div className="p text-sm">90%</div>
              </ProgressBar>
              <div className="text-2xl flex justify-center items-center px-2">
                <Icon icon="material-icon-theme:javascript-map" />
              </div>
            </p>
            <p className="border border-slate-300 rounded-md  flex justify-between items-cente">
              <ProgressBar
                range={80}
                className="flex justify-between items-center"
              >
                <p className="pl-2">React js</p>{" "}
                <div className="p text-sm">80%</div>
              </ProgressBar>
              <div className="text-xl flex justify-center items-center px-2">
                <Icon icon="devicon:react" />
              </div>
            </p>
            <p className="border border-slate-300 rounded-md  flex justify-between items-cente">
              <ProgressBar
                range={80}
                className="flex justify-between items-center"
              >
                <p className="pl-2">MangoDB</p>{" "}
                <div className="p text-sm">80%</div>
              </ProgressBar>
              <div className="text-2xl flex justify-center items-center px-2">
                <Icon icon="devicon:mongodb-wordmark" />
              </div>
            </p>
            <p className="border border-slate-300 rounded-md  flex justify-between items-center">
              <ProgressBar
                range={80}
                className="flex justify-between items-center"
              >
                <p className="pl-2">Express </p>{" "}
                <div className="p text-sm">80%</div>
              </ProgressBar>

              <div className="text-xl flex justify-center items-center px-2 ">
                <Icon icon="skill-icons:expressjs-dark" />
              </div>
            </p>

            <p className="border border-slate-300 rounded-md  flex justify-between items-center">
              <ProgressBar
                range={70}
                className="flex justify-between items-center"
              >
                <p className="pl-2">Node Js </p>{" "}
                <div className="p text-sm">70%</div>
              </ProgressBar>

              <div className="text-xl flex justify-center items-center px-2 ">
                <Icon icon="logos:nodejs" />
              </div>
            </p>
          </div>
        </div>

        <div
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
          className="skill-ui-ux border border-slate-200 w-full duration-500  p-10 max-sm:px-5 flex flex-col gap-3 rounded-md hover:bg-blue-600 duration-800 bg-white hover:text-white  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:py-10"
        >
          <div
            className={`icone border-2   border-slate-300 duration-700 h-14 w-14 rounded-full text-5xl flex justify-center items-center  rotate-y-180 duration-800  
          ${isCardhover == true ? "text-red-500" : "text-black"}
            `}
          >
            <Icon icon="fluent:card-ui-20-filled" />
          </div>
          <h1 className="font-serif text-3xl duration-800">UI/UX Designer</h1>

          <p
            className={`font-sans max-sm:text-center ${
              isCardhover ? "text-white duration-800" : "text-slate-700"
            }`}
          >
            I design intuitive, user-friendly, and visually engaging interfaces
            that enhance user experiences, improve accessibility, and drive
            engagement by blending creativity, functionality, and usability to
            create seamless digital interactions that delight users.
          </p>
          <Button
            type="text"
            // className="border border-yellow-400 px-3 p-2 rounded-md font-semibold max-sm:w-full"
          >
            See More
          </Button>
        </div>

        <div
          onMouseOver={handleCardHover_1}
          onMouseLeave={handleCardLeave_1}
          className="skill-ui-ux border  border-slate-200 duration-900 bg-white w-full  p-10 max-sm:px-5 max-sm:py-10 flex flex-col gap-3 rounded-md hover:bg-blue-600 duration-600 hover:text-white max-sm:flex max-sm:flex-col max-sm:items-center"
        >
          <div
            className={`icone border-2 border-slate-300 h-14 w-14 rounded-full  text-5xl flex justify-center items-center ${
              isCardhover_1 ? "text-orange-500" : ""
            }`}
          >
            <Icon icon="mdi:web" />
          </div>
          <h1 className="font-serif text-3xl max-sm:text-center">
            {" "}
            Full Stack Web Developer
          </h1>
          <p
            className={`font-sans max-sm:text-center ${
              isCardhover_1 == true ? "text-white" : "text-slate-700"
            }`}
          >
            I build dynamic, scalable, and user-friendly web applications,
            handling both front-end and back-end development. I create seamless,
            efficient, and responsive digital experiences by combining strong
            coding skills with problem-solving and creativity."
          </p>
          <Button
            type="text"
            // className="border border-yellow-400 px-3 p-2 rounded-md font-semibold max-sm:w-full"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
