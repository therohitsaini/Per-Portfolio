import React, { useRef, useState } from "react";

function Contact() {
  const name = useRef("");
  const gmail = useRef("");
  const textSome = useRef("");

  const [formData, setFormData] = useState("");
  const handleSubmit = () => {
    const obj = {
      name: name.current.value,
      gmail: gmail.current.value,
      textSome: textSome.current.value,
    };
    if (name.current.value !== "" && gmail.current.value !== "") {
      setFormData(obj);
      alert(JSON.stringify(obj));
    } else {
      alert("incrrect");
    }
  };
  // console.log("formdata", formData);
  return (
    <div className="Contect-Container px-20 bg-slate-200 py-4  max-sm:py-0 max-sm:px-5 ">
      <div className="contect-section flex justify-center items-center flex-col mb-5     ">
        <h3 className="font-semibold text-4xl my-1 max-sm:mt-5">Contact Me</h3>
        <div className="border border-slate-300 w-28 flex justify-center">
          <div className="border-2 border-blue-600 w-10  absolute"></div>
        </div>
        <p className="px-64 text-center my-4 text-slate-600 max-sm:px-2 from-normal">
        I’d love to discuss your project and how I can help. Feel free to reach out if you’re interested in collaborating or just want to chat about web development
        </p>
      </div>
      <div className="contact-text border border-blue-600 flex  max-sm:flex max-sm:flex-col border-none ">
        <div className="text w-full border border-red-700 flex flex-col justify-center gap-4 border-none bg-blue-500 px-5 max-sm:py-4 max-sm:rounded-t-md">
          <h1 className="contact-heading font-serif text-5xl text-white max-sm:text-3xl">
            Let's Connect and Build Something Great!
          </h1>
          <p className="text-slate-300">
            Let’s work together to turn your ideas into reality. Reach out
            today, and let’s build a stunning, functional, and user-friendly
            website that meets your needs!
          </p>
       

        </div>
        <div className="Contact-form w-full h-[400px] border border-red-700 flex justify-center items-center max-sm:h-full max-sm:w-full  bg-white max-sm:mb-3 max-sm:rounded-b-md border-none">
          <form className="border border-yellow-400 max-sm:w-full  border-none max-sm:px-2 max-sm:py-2 ">
            <div className="flex  gap-2 max-sm:flex max-sm:flex-col">
              <label className="flex flex-col bg-white border-b-2 border-blue-500 ">
                <label for="text" className="ml-1">
                  Name
                </label>
                <input
                  className="w-64 p-2 outline-none border-b-2 border-blue-500 max-sm:w-full"
                  type="text"
                  placeholder="Enter Name"
                  required
                  ref={name}
                ></input>
              </label>
              <label className="flex flex-col bg-white border-b-2 border-blue-500 max-sm:w-full">
                <label for="text" className="ml-1">
                  Email
                </label>
                <input
                  className="w-64 p-2   outline-none border-b-2 border-blue-500  max-sm:w-full"
                  placeholder="Enter Email"
                  required
                  type="text"
                  ref={gmail}
                ></input>
              </label>
            </div>
            <label className="flex flex-col my-3 bg-white border-b-2 border-blue-500">
              <label for="text">Email</label>
              <textarea
                className="  outline-none border-b-2 border-blue-500 mt-1 max-sm:w-full"
                name=""
                id=""
                role="20"
                rows={6}
                placeholder="Ask something"
                ref={textSome}
              ></textarea>
            </label>
            <button
              onClick={handleSubmit}
              className="btn w-full border border-blue-600 p-2 mt-2 rounded-md bg-blue-600 text-white font-semibold "
              type="btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
