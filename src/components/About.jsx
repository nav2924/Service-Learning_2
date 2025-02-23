import React from "react";
import { FaDownload, FaFilePowerpoint } from "react-icons/fa";

const pptFiles = [
  {
    title: "Presentation 1",
    link: "https://filesamples.com/samples/document/ppt/sample1.ppt",
  },
  {
    title: "Presentation 2",
    link: "https://filesamples.com/samples/document/ppt/sample2.ppt",
  },
  {
    title: "Presentation 3",
    link: "https://filesamples.com/samples/document/ppt/sample3.ppt",
  },
  {
    title: "Presentation 4",
    link: "https://filesamples.com/samples/document/ppt/sample4.ppt",
  },
  {
    title: "Presentation 5",
    link: "https://filesamples.com/samples/document/ppt/sample5.ppt",
  },
];

const youtubeVideos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3",
  "https://www.youtube.com/embed/VIDEO_ID_4",
  "https://www.youtube.com/embed/VIDEO_ID_5",
  "https://www.youtube.com/embed/VIDEO_ID_6",
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
