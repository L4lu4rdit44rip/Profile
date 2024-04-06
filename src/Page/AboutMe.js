import React, { useRef } from "react";
function AboutMe() {
  const aboutRef = useRef(null);
  return (
    <div
      ref={aboutRef}
      className="mx-auto px-10 sm:mx-auto sm:max-w-2xl md:max-w-3xl md:mx-auto lg:pt-10 lg:max-w-6xl xl lg:mx-auto "
    >
      <div className="flex justify-center">
        <h1 className="text-white font-bold text-3xl mt-10 lg:text-5xl">
          About<span className="pl-2 text-yellow-700">Me</span>
        </h1>
      </div>
      <div>
        <div className="mt-4 sm:px-3 md:px-5 lg:pt-10 ">
          <h1 className="text-white font-bold sm:text-xl lg:text-2xl">
            Informasi Peribadi :
          </h1>
          <div className="lg:flex  ">
            <div className="flex  space-x-2 pt-7 sm:flex sm:space-x-3 sm:py-3 lg:space-x-10 lg:w-full">
              <div className=" ">
                <p className="text-white  text-xs lg:text-xl lg:pt-5 ">
                  Name:<span className="font-bold "> Lalu Ardita Arip</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Age:<span className="font-bold  "> 23 Tahun</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Date of Birdh:
                  <span className="font-bold"> 12-11-2000</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Hp/Wa:
                  <span className="font-bold "> +6285964150027</span>
                </p>
              </div>
              <div className="  sm:w-1/2">
                <p className="text-white text-xs lg:text-xl lg:pt-5">
                  Country:<span className="font-bold "> Indonesia</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Address:<span className="font-bold "> East Lombok</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Language:<span className="font-bold "> Indonesia</span>
                </p>
                <p className="text-white text-xs lg:text-xl lg:pt-2">
                  Email:
                  <span className="font-bold "> Ardita.arip18@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-8 sm:flex sm:space-x-3 lg:mx-full  ">
              <div>
                <div className="h-20 lg:h-24 w-40 bg-white/30 rounded-lg my-2 sm:w-60 md:w-80 lg:w-52">
                  <h1 className="text-2xl font-bold pl-2">2+</h1>
                  <div className="border-b-4 border-black ml-5 mr-12 lg:mr-20"></div>
                  <h2 className="ml-7 text-xs lg:text-xl lg:ml-14">
                    year of Experienc
                  </h2>
                </div>
                <div className="h-20 lg:h-24 w-40  bg-white/30 rounded-lg my-2 sm:w-60  md:w-80 lg:w-52">
                  <h1 className="text-2xl font-bold pl-2">6+</h1>
                  <div className="border-b-4 border-black ml-5 mr-12 lg:mr-20"></div>
                  <h2 className="ml-7 text-xs lg:text-xl lg:ml-14">
                    Projec Celestial
                  </h2>
                </div>
              </div>
              <div>
                <div className="h-20 lg:h-24 w-40  bg-white/30 rounded-lg my-2 sm:w-60  md:w-80 lg:w-52">
                  <h1 className="text-2xl font-bold pl-2">4+</h1>
                  <div className="border-b-4 border-black ml-5 mr-12 lg:mr-20"></div>
                  <h2 className="ml-7 text-xs lg:text-xl lg:ml-14">
                    Customer Satisfaction
                  </h2>
                </div>
                <div className="h-20 lg:h-24 w-40 bg-white/30 rounded-lg my-2 sm:w-60   md:w-80 lg:w-52">
                  <h1 className="text-2xl font-bold pl-2">13+</h1>
                  <div className="border-b-4 border-black ml-5 mr-12 lg:mr-20"></div>
                  <h2 className="ml-7 text-xs lg:text-xl lg:ml-14">
                    Certificates and awards
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
