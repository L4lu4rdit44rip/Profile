import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";

function Skillprops({ Gambar, Bahasa, alt, Angka, DataPersen }) {
  const [hovered, setHover] = useState(false);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: DataPersen,
            backgroundColor: [" rgb(203 213 225)", "rgb(255, 99, 132)"],
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  });

  return (
    <div>
      <div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex w-44 h-44"
        >
          <div>
            <div
              className={`flex justify-center items-center  w-36 h-36 pt-19  rounded-full text-xl font-bold  absolute ${
                hovered ? "" : "invisible"
              }`}
            >
              <div className="flex items-center justify-center absolute bg-white w-28 h-28 mt-2 rounded-full">
                <div>
                  <h1 className="flex justify-center items-center">{Bahasa}</h1>
                  <h1 className="flex justify-center items-center">{Angka}</h1>
                </div>
              </div>

              <canvas
                ref={chartRef}
                style={{ width: "150px", height: "50px" }}
              ></canvas>
            </div>
            <img
              src={Gambar}
              alt={alt}
              className={`w-32 h-32 ${hovered ? "invisible" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillprops;
