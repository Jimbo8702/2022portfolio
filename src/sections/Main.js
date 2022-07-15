import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="center">
      <div className="center-container">
        <h1 className="title bubble mb-5 background-black">Some Projects </h1>
        <div className="content-container">
          <Projects />
        </div>

        <div className="content-container mt-5">
          <AboutMe />
        </div>

        <div className="content-container d-flex justify-content-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
