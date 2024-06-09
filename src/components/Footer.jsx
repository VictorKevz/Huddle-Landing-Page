import React from "react";
import "./css/footer.css";
import footerLogo from "/footer-logo_files/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img src={footerLogo} alt="footer-logo" className="footer-logo" />
      </div>
      <div className="inner-footer-container">
        <div className="location-phone-email-container">
          <div className="location-container">
            <img src={locationIcon} alt="icon-location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="phone-container">
            <img src={phoneIcon} alt="icon-phone" />
            <p>+1-543-123-4567</p>
          </div>

          <div className="email-container">
            <img src={emailIcon} alt="icon-email" />
            <p>example@huddle.com</p>
          </div>
        </div>
        <div className="about-container">
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="career-container">
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-links-container">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </IconContext.Provider>
        </div>
      </div>
      <div class="footer-copyright-container">
        <p>
          &copy;{" "}
          <a href="https://github.com/VictorKevz" target="_blank" className="footer-link">
            Victor.Kevz
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
