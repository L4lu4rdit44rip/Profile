import { useRef } from "react";
import Cplus from "../Asset/C++.png";
import Css from "../Asset/css.jpg";
import Html from "../Asset/html.png";
import Php from "../Asset/php.png";
import Python from "../Asset/Python.png";
import ReactImg from "../Asset/react.png";
import Skillprops from "./Skillprops";
const SkillData = [
  { Gambar: Python, Bahasa: "Python", Angka: "10%", DataPersen: [10, 90] },
  { Gambar: ReactImg, Bahasa: "React", Angka: "10%", DataPersen: [10, 90] },
  { Gambar: Html, Bahasa: "Html", Angka: "10%", DataPersen: [10, 90] },
  { Gambar: Css, Bahasa: "Css", Angka: "10%", DataPersen: [10, 90] },
  { Gambar: Php, Bahasa: "Php", Angka: "10%", DataPersen: [10, 90] },
  { Gambar: Cplus, Bahasa: "C++", Angka: "10%", DataPersen: [10, 90] },
];

function Skill() {
  const skillRef = useRef(null);
  return (
    <div ref={skillRef} className="mx-10 sm:ml-24 lg:max-w-7xl ">
      <div className="py-10 flex justify-center md:pt-5 lg:pt-32">
        <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-5xl ">
          My <span className="text-yellow-700">Skill </span>
        </h1>
      </div>
      <div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-2 pt-10 sm:grid-cols-3 lg:ml-52">
          {SkillData.map((skill, index) => (
            <Skillprops
              key={index}
              Gambar={skill.Gambar}
              alt="Gambar"
              Bahasa={skill.Bahasa}
              Angka={skill.Angka}
              DataPersen={skill.DataPersen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
