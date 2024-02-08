import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/somesh-bhandari-bb7201223/ "
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/Somesh001yt" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="mailto:someshcr7b@gmail.com">
        <GrMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
