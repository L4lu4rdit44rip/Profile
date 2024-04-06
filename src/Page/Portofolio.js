import React, { useRef } from "react";
import imgPf from "../Asset/aripPf1.png";
import imgPf2 from "../Asset/aripPf2.png";
import imgPf4 from "../Asset/Iris.jpg";
import imgPf3 from "../Asset/Semiclon.jpg";
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
          src={imgPf4}
          alt="Image"
          judul="Iris"
          desct="Iris is an innovative web application that facilitates access to healthcare information. Users can consult with registered healthcare experts and access comprehensive information about medications and the latest developments in the health industry."
        />
        <Portofolio1
          src={imgPf3}
          alt="Image"
          judul="Semiclon"
          desct="Semiclon is a web application owned by the startup Semiclon, offering a range of products such as cameras and CCTV. This comprehensive platform encompasses company profiles and product ordering services, providing users with seamless access to information and easy product procurement."
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
