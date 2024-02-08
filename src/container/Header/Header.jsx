import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Header.scss";
import Background from "./Background";

import Typed from 'typed.js';



const Header = () => {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Software Developer", "Frontend Developer" , "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    // Cleanup function to destroy the Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
  <motion.div  className="app__header header__flex ">
    <div className="header__container">
      <h2 className="heading ">
        Hi, I'm Somesh a passionate <br /> <span className="text"></span> {" "}
      </h2>
      <p className="paragraph">
        I create modern Websites based on your design and <br />
        build interactive Websites.
      </p>
      <span className="span">Stick around to see some of my work.</span>

      <a href="#portfolio" className="text button">
        See my latest projects
      </a>
    </div>
    <Background />
  </motion.div>
)};

export default AppWrap(
  MotionWrap(Header, "app__works",  "home",),
  "app__primarybg"
);
