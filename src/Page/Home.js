import React, { useRef } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Foto from "../Asset/foto90.jpg";
import IconBar from "../IconBar/IconBar";
function Home() {
  const homeRef = useRef(null);
  const [kata] = useTypewriter({
    words: ["Web Developer!!", "Machine Lerning!", "Data Entry!!"],
    loop: {},
  });
  return (
    <div
      ref={homeRef}
      className="px-10 sm:flex sm:space-x-6 lg:max-lg xl:mx-40 xl:justify-between"
    >
      <div className=" sm:hidden ">
        <img className=" rounded-full px-2 pt-10 pb-5" src={Foto} alt="Foto" />
      </div>

      <div className="placeholder-opacity-100 sm:pt-20 md:pt-28  ">
        <h3 className="text-white text-2xl font-bold sm:text-4xl md:text-5xl">
          Hi, I'm Lalu Ardita Arip!!
        </h3>
        <h1 className=" text-white text-2xl sm:text-2xl sm:pt-5 md:text-4xl lg:text-5xl ">
          I am a
          <span className=" pl-2 text-yellow-600">
            {kata} <Cursor />
          </span>
        </h1>
        <p className="text-white py-10 sm:py-2 lg:text-xl lg:py-10 lg:pr-20">
          I graduated from the Faculty of Science and Computer, Pertamina
          University in 2023, I have skills in the fields of Web developer,
          Machine Learning and Data scientist. I have a diligent and unyielding
          personality.
        </p>
        <div className="sm:block">
          <div className=" hidden  sm:flex pt-5 space-x-2 sm:py-2 ">
            <a href="https://github.com/L4lu4rdit44rip">
              <IconBar harf="" text="GitHub">
                <FaGithub className="size-7 lg:size-8" />
              </IconBar>
            </a>
            <a href="https://www.linkedin.com/in/lalu-ardita-arip-b714a11a4/">
              <IconBar text="Linkedin">
                <FaLinkedin className="size-7 lg:size-8" />
              </IconBar>
            </a>
          </div>
        </div>
        <div className="hidden sm:block md:block lg:block">
          <div className=" flex  justify-center py-5 sm:justify-start lg:text-2xl lg:pt-14  ">
            {/* <button className="font-bold text-white rounded-md p-3 bg-yellow-600 lg:px-5">
              Contac Us
            </button> */}
          </div>
        </div>
      </div>
      <div className="animate-pulse hidden sm:block sm:pt-10">
        <img
          className=" rounded-full px-2 pt-10 pb-5 lg:text-xl"
          src={Foto}
          alt="Foto"
        />
      </div>
    </div>
  );
}

export default Home;
