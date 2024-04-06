import React, { useRef } from "react";
import Experience from "../Page/Experience";
import Edukasi from "./Edukasi";
const EducationData = [
  {
    Tahun: "2016 - 2019",
    Sekolah: "SMA N 1 Selong",
    Jurusan: "Matematika dan IPA",
    Kegiatan: "- Organisasi olimpiade Matematika. - Organisasi sanggar seni",
  },
  {
    Tahun: "2019 - 2023",
    Sekolah: "Universitas Pertamina",
    Jurusan: "Ilmu Komputer",
    Kegiatan:
      "- Organisasi Himpunan Mahasiswa Ilmu Komputer. - Organisasi UPMoar(Gambar). - Panitia CITE-UP 3 dan CITE-UP 4. - Kegiatan CS-Devlopmen",
  },
  {
    Tahun: "2022",
    Sekolah: "Dicoding",
    Jurusan: "Machine Learning dan Front End",
    Kegiatan:
      "- Belajar Machine Lerning. - Belajar Front-End Web. - Membuat Proyek Machine Lerning dan Front-end",
  },
];

const ExperiencData = [
  {
    Tahun: "2023",
    Offcie: "Universitas Pertamina - Interen",
    Jurusan: "Machine Learning ",
    Kegiatan:
      "- Developed innovative activity recognition model using WiFi fingerprints. - Used Python for efficient model development and data analysis. - Leveraged Tensorflow and Pytorch for enhanced pattern recognition and learning. -Achieved location-specific activity recognition enhancing user interaction",
  },
  {
    Tahun: "2023",
    Offcie: "Puskesmas Lenek - Freelance",
    Jurusan: "Program Devloper",
    Kegiatan:
      "- Developed an efficient service system in VBA excel. - Enhanced staff and patient interaction at the health center. - Implemented system for a streamlined health service delivery. - Boosted patient engagement through in-built communication system",
  },
  {
    Tahun: "2023-2024",
    Offcie: "Hyperhire - contrac",
    Jurusan: "Front end develover",
    Kegiatan:
      "- Used React.js and Next.js to develop user interface. - Designing attractive and interactive web displays.",
  },
  {
    Tahun: "2024",
    Offcie: "Universitas Pertamina (Geofisika) - contrac",
    Jurusan: "Web Developer",
    Kegiatan:
      "- Flask is integrated to seamlessly connect Python data processing applications with web interfaces.",
  },
];
function EduDanExp() {
  const eduDanExpRef = useRef(null);
  const formatKegiatan = (kegiatan) => {
    const kegiatanList = kegiatan.split(". ");
    return kegiatanList.map((item, index) => (
      <p key={index} className="mb-1">
        {item}
      </p>
    ));
  };
  return (
    <div ref={eduDanExpRef} className="mx-10 ">
      <div className=" text-white flex text-2xl font-bold my-10 justify-center  lg:max-w-5xl lg:mx-auto lg:text-4xl ">
        Education & <span className="text-yellow-700 pl-2">Experience</span>
      </div>
      <div className="my-10">
        <div className="grid gap-x-2 gap-y-2 grid-cols-2 sm:grid-cols-3 lg:ml-32 lg:mx-24 lg:pl-12">
          {EducationData.map((data, index) => (
            <Edukasi
              key={index}
              Tahun={data.Tahun}
              Sekolah={data.Sekolah}
              Jurusan={data.Jurusan}
              Kegiatan={formatKegiatan(data.Kegiatan)}
            />
          ))}
        </div>
        <div className="grid gap-x-2 gap-y-4 grid-cols-2 mt-20 sm:ml-16 lg:grid-cols-3 lg:ml-32 lg:mx-24 lg:pl-12 ">
          {ExperiencData.map((data, index) => (
            <Experience
              key={index}
              Tahun={data.Tahun}
              Office={data.Offcie}
              Jurusan={data.Jurusan}
              Kegiatan={formatKegiatan(data.Kegiatan)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EduDanExp;
