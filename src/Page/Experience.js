import React from "react";
import { MdWork } from "react-icons/md";

export default function Experience({ Tahun, Office, Jurusan, Kegiatan }) {
  return (
    <div>
      <div>
        <div className="  bg-white/30 w-40 h-96 sm:w-60 sm:h-72  lg:w-72 rounded-md p-3">
          <div className="flex items-center gap-3">
            <div className="bg-slate-300 w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center rounded-full ">
              <MdWork className="size-4 lg:size-6" />
            </div>
            <div className="bg-slate-300 rounded-full p-1 lg:p-2">
              <h1 className="text-xs lg:text-sm">{Tahun}</h1>
            </div>
          </div>

          <div className="   ml-2 border-l-2 border-black">
            <h1 className="ml-4 text-sm font-bold lg:ml-6 lg:text-xl">
              {Office}
            </h1>

            <div className="ml-4">
              <p className="text-sm">{Jurusan}</p>
              <p className="text-[10px] ml-2">{Kegiatan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
