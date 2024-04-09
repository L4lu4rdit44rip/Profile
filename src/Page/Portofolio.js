import React, { useRef } from "react";
import imgPf from "../Asset/aripPf1.png";
import imgPf2 from "../Asset/aripPf2.png";
import Portofolio1 from "./Portofolio1";
import Portofolio2 from "./Portofolio2";
function Portofolio() {
  const portofolioRef = useRef(null);
  return (
    <div ref={portofolioRef} className="">
      <div className="flex justify-center">
        <h1 className="text-white font-bold text-3xl my-10 lg:text-5xl lg:py-10">
          Portofolio
        </h1>
      </div>
      <div className="lg:size-full">
        <Portofolio1
          src={imgPf}
          alt="Image"
          judul="classification of monkey pox"
          desct="Application to differentiate between common smallpox and monkey pox, by utilizing classification of existing data on common small pox and monkey pox."
        />
        <Portofolio2
          src={imgPf2}
          alt="Image"
          judul="Mini Game"
          desct="Simple games that are easy to play anytime and anywhere, games to train reflexes and train focus."
        />
      </div>
    </div>
  );
}

export default Portofolio;
