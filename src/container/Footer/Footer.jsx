import React, { useEffect } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import Typed from 'typed.js';
import "./Footer.scss";

import { useForm } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mpzezlel");


  if (state.succeeded) {
    return <div className="succeed">Thank you for getting in touch!</div>;
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      {/* <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:someshcr7b@gmail.com" className="p-text">
            someshcr7b@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 23456" className="p-text">
            +91 123457
          </a>
        </div>
      </div> */}

      <form onSubmit={handleSubmit} className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <button type="submit" className="p-text">
          Send Message
        </button>
      </form>

      <div className="copyright">
        <p>
          &copy;2023{" "}
          <span className="name">
            <a
              href="https://www.linkedin.com/in/somesh-bhandari-bb7201223/"
              target="_blank"
            >
              {" "}
              Somesh
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
