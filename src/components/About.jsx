import React from "react";
import { FaDownload, FaFilePowerpoint } from "react-icons/fa";

const pptFiles = [
  {
    title: "AI MODULE 5",
    link: "src/assets/AI MODULE 5.pdf",
  },
  {
    title: "ETHICS MODULE 4",
    link: "src/assets/ETHICS MODULE 4.pdf",
  },
  {
    title: "MODULE 1 CS",
    link: "src/assets/MODULE 1 CS.pdf",
  },
  {
    title: "MODULE 2 PARTS OF A COMP",
    link: "src/assets/MODULE 2 PARTS OF A COMP.pdf",
  },
  {
    title: "THE EVOLUTION MODULE 3",
    link: "src/assets/THE EVOLUTION MODULE 3.pdf",
  },
];

const youtubeVideos = [
  "https://www.youtube.com/embed/AkFi90lZmXA",
  "https://www.youtube.com/embed/QtDAzhiTXC4",
  "https://www.youtube.com/embed/RmbFJq2jADY",
];


const PPTCard = ({ title, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between w-full max-w-md mx-auto md:mx-0">
      <div className="flex items-center space-x-4">
        <FaFilePowerpoint className="text-red-500 text-3xl" />
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <a
        href={link}
        download
        className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg flex items-center space-x-2"
      >
        <FaDownload />
        <span>Download</span>
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-blue-300">
      <div className="p-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          📂 Downloadable PPTs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pptFiles.map((ppt, index) => (
            <PPTCard key={index} {...ppt} />
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 p-4 flex items-center justify-center">
        YouTube Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
        {youtubeVideos.map((video, index) => (
          <iframe
            key={index}
            width="100%"
            height="200"
            src={video}
            title={`YouTube Video ${index + 1}`}
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default About;
