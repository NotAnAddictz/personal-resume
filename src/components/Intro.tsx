import React from "react";
import "../css/Intro.css";
import Face from "../assets/profile.jpg";
const Intro = () => {
  return (
    <div className="intro-main section">
      <div className="intro">
        <h1>About Me</h1>
        <h3>
          <ul>
            <li>Passionate about learning new tech  </li>
            <br/>
            <li>Video Game, Sports enthusiast</li>
            <br/>
            <li>Into Data Engineering & Cloud Computing</li>
          </ul>
        </h3>
      </div>
      <div className="center">
        <img className="image-intro" src={Face}></img>
      </div>
      <div className="intro">
        <h1>Education</h1>
        <h3>
          <ul>
            <li>Bachelors in Computing (Computer Science)</li> <span>Nanyang Technological University[2021-2024]</span>
            <br/><br/>
            <li>AWS Cloud Practitioner [2025]</li>
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default Intro;
