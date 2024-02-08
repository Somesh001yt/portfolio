import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const works = [
  {
    name: "Spotify-Clone",
    title: "Spotify Clone",
    imgUrl: images.spotify,
    description: `Developed a full-stack web application using Next.js,
      TypeScript, and Tailwind CSS to replicate the core
      functionalities of the popular music streaming platform,
      Spotify.
      The project aimed to demonstrate proﬁciency in modern
      web development technologies and showcase the ability to
      build a complex application from scratch.`,
    projectLink: "spotify-clone-07.vercel.app/",
    codeLink: "https://github.com/Somesh001yt/spotify-clone",
  },
  {
    name: "car-Rental",
    title: "Car Rental",
    imgUrl: images.carRental,
    description: `Developed a dynamic and performant Car Information
      System using Next.js to provide users with detailed
      speciﬁcations, including fuel average, performance metrics,
      and other relevant data.
      The project aimed to demonstrate various cars and modal to the user
      and about their looks.
      `,
    projectLink: "car-rental-zqj5.vercel.app/",
    codeLink: "https://github.com/Somesh001yt/carRental",
  },
  {
    name: "stack-overflow",
    title: "Stack Overflow",
    imgUrl: images.Stack,
    description: `Developed Stack Overflow Clone which is a web application 
    designed to mimic the functionality and features of the popular Q&A platform,
     developed by using the MERN  stack.
     This comprehensive overview will delve into the architecture, 
     features, and technologies utilized in building this clone.
      `,
    projectLink: "stack-overflow-somesh07.netlify.app",
    codeLink: "https://github.com/Somesh001yt/StackOverflow",
  },
  {
    name: "movies",
    title: "Movies",
    imgUrl: images.Movies,
    description: ` Developed Movie Project is a web application designed 
    to showcase a collection of movies, providing users with
     information about each movie. This overview will 
     explore the architecture, features, and technologies used
      in building this project using HTML, CSS, and JavaScript.
      `,
    projectLink: "somesh001yt.github.io/Movies/",
    codeLink: "https://github.com/Somesh001yt/Movies",
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">Portfolio</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img className="project_img" src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "center" }}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="more__link">
        <a href="https://github.com/Somesh001yt" target="_blank">
          More projects
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
