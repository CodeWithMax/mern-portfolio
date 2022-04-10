import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is adarsh Choudhary. I am a Full-Stack Developer , DevOps
          Engineer and Gamer on Youtube channel called <b> RtxMax</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/CodeWithMax" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2fTTdiMC4Bh5SKUeJfnuKA"
          target="black"
        >
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/ek_adarsh/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ProfileAdarsh/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
