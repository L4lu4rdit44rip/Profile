import React from "react";

function Portofolio1(props) {
  return (
    <div className="max-w-5xl mx-auto md:px-20 lg:flex">
      <div className="px-10 lg:hidden ">
        <img className="rounded-2xl " src={props.src} alt={props.alt} />
      </div>
      <div className="px-10 pt-5 lg:pt-10">
        <h1 className="font-bold text-2xl lg:text-3xl text-white ">
          {props.judul}
        </h1>
        <p className="text-ms  text-white">{props.desct}</p>
      </div>
      <div className=" hidden lg:block ">
        <img className="rounded-2xl " src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

export default Portofolio1;
