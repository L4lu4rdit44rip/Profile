import React, { useRef, useState } from "react";

export default function IconBar({ children, text, color, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex p-1 items-center rounded-lg text-black ${
        color || "bg-white"
      }`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className=" overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5 font-bold">
          {text}
        </span>
      </div>
    </button>
  );
}
