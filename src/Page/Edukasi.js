import React from "react";
import { IoMdSchool } from "react-icons/io";

export default function Edukasi({ Tahun, Sekolah, Jurusan, Kegiatan }) {
  return (
    <div>
      <div>
        <div className="  bg-white/30 w-40 h-80 sm:w-52 sm:h-60 lg:w-72 rounded-md p-3 ">
          <div className="flex items-center gap-3">
            <div className="bg-slate-300 w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center rounded-full ">
              <IoMdSchool className="size-4 lg:size-6" />
            </div>
            <div className="bg-slate-300 rounded-full p-1 lg:p-2">
              <h1 className="text-xs lg:text-sm">{Tahun}</h1>
            </div>
          </div>

          <div className="  ml-2 border-l-2 border-black">
            <h1 className="ml-4 text-sm font-bold lg:ml-6 lg:text-xl">
              {Sekolah}
            </h1>

            <div className="ml-4 lg:ml-6">
              <p className="text-sm lg:text-xl">{Jurusan}</p>
              <p className="text-[12px] ml-2 lg:text-[14px]">{Kegiatan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
