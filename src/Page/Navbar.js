import React, { useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const eduDanExpRef = useRef(null);
  const portofolioRef = useRef(null);
  const contacRef = useRef(null);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <div
        className={`bg-slate-400 ml-2 mt-4 rounded-full p-1 size-6 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div className="transition" onClick={handleToggle}>
          {isOpen ? (
            <IoCloseCircleOutline
              className="mr-auto"
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <CgMenuGridO className="ml-auto" />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="list-none p-1 backdrop-sepia-0 bg-black/90 h-50% w-full flex flex-col ">
          <div
            onClick={handleToggle}
            className="my-2 flex justify-start items-start"
          >
            <IoCloseCircleOutline
              className="text-white"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <li className="p-2 border border-white rounded-full ">
              <Link
                to="/"
                ref={homeRef}
                onClick={() =>
                  homeRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                Home
              </Link>
            </li>
            <li className="p-2 border border-white rounded-full my-2">
              <Link
                to="/AboutMe"
                ref={aboutRef}
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                About Me
              </Link>
            </li>
            <li className="p-2 border border-white rounded-full mb-2">
              <Link
                to="/Skill"
                ref={skillRef}
                onClick={() =>
                  skillRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                Skill
              </Link>
            </li>
            <li className="p-2 border border-white rounded-full mb-2">
              <Link
                to="/EduDanExp"
                ref={eduDanExpRef}
                onClick={() =>
                  eduDanExpRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                Edu & Exp
              </Link>
            </li>
            <li className="p-2 border border-white rounded-full mb-2">
              <Link
                to="/Portofolio"
                ref={portofolioRef}
                onClick={() =>
                  portofolioRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                Portofolio
              </Link>
            </li>
            <li className="p-2 border border-white rounded-full mb-2">
              <Link
                to="/ContacUs"
                ref={contacRef}
                onClick={() =>
                  contacRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white"
              >
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
