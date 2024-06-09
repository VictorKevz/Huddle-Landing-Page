import React from "react";
import "./css/home.css";
import logo from "../assets/images/logo.svg";
import heroIMG from "../assets/images/illustration-mockups.svg";


function Home() {
  return (
    <div className="home-container">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="huddle-logo" className="home-logo" />
        </div>
        <a className="nav-link">Try It Free</a>
      </nav>
      <div className="hero-container">
        <div className="item text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a className="hero-link">Get Started For Free</a>
        </div>
        <div className="item image">
            <img src={heroIMG} alt="illustration-mockups"/>
        </div>
      </div>
    </div>
  );
}
export default Home;
