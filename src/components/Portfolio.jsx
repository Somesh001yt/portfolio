import React from "react";
import stackClone from "../assets/portfolio/stackPicture.png";
import Img1 from "../assets/portfolio/image1.webp";
import Img2 from "../assets/portfolio/image2.webp";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={stackClone}
              alt="Stack overflow clone"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a
                href="https://stack-overflow-somesh07.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </a>
              <a
                href="https://github.com/Somesh001yt/StackOverflow"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={Img1}
              alt="Movies site pic"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a
                href="https://stack-overflow-somesh07.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </a>
              <a
                href="https://github.com/Somesh001yt/Movies"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={Img2}
              alt="Random pic"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a
                href="https://stack-overflow-somesh07.netlify.app/"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </a>
              <a
                href="https://github.com/Somesh001yt/StackOverflow"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
