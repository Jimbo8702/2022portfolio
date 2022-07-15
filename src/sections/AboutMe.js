import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me mt-5 mb-5">
      <div className=" about-me-text">
        <h1>A little about me</h1>
        <p className="p-3">
          My name is James Sgarella. I am a junior Web Developer with full stack
          experience. I completed the Columbia Engineer Full Stack Coding
          Bootcamp in January 2022. I am now am enrolled in Columbia's part-time
          Fintech Bootcamp where I'm working with Python libraries to perform
          Quantitive anaylsis, develop Machine Learning Models, and develop/test
          trading algorithms. I am a fast learner and am always looking for the
          opporunity to expand my skills.
        </p>
      </div>
      <div className="about-me-tech font">
        <h1 className="title bubble mb-5 background-black mt-5">Tech Skills</h1>
        <div className="tech d-flex">
          <div>
            <h2>FrontEnd</h2>
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React + React-native</li>
            </ul>
          </div>
          <div>
            <h2 className="right">Backend</h2>
            <ul className="tech-list right">
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Node.js + Express.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Grapql</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-center">Additional Libaries </h2>
          <ul className="tech-list ">
            <li>TensorFlow + Keras ~ educational expierence</li>
            <li>Scikit-learn ~ educational expierence</li>
            <li>Pandas</li>
            <li>Django REST</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
