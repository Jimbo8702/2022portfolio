import React, { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Footer";

export default function Center() {
  const [selected, setSelected] = useState("Projects");
  const [pageState, setPageState] = useState(Projects);
  const setState = (state) => {
    if (state == "Projects") {
      setSelected(state);
      setPageState(Projects);
    }
    if (state == "About Me") {
      setSelected(state);
      setPageState(AboutMe);
    }
    if (state == "Contact") {
      setSelected(state);
      setPageState(Contact);
    }
  };
  return (
    <div className="center-section d-flex justify-content-center align-items-center">
      <div className="center-container">
        <div className="center-top">
          <div
            onClick={() => {
              setState("Projects");
            }}
            className={
              selected == "Projects"
                ? "bubble mb-3 background-black"
                : "bubble mb-3 background-white"
            }
          >
            <h1 className="title"> Some Projects </h1>
          </div>
          <div
            onClick={() => {
              setState("About Me");
            }}
            className={
              selected == "About Me"
                ? "bubble mb-3 background-black"
                : "bubble mb-3 background-white"
            }
          >
            <h1 className="title "> About Me </h1>
          </div>
          <div
            onClick={() => {
              setState("Contact");
            }}
            className={
              selected == "Contact"
                ? "bubble mb-3 background-black"
                : "bubble mb-3 background-white"
            }
          >
            <h1 className="title "> Contact </h1>
          </div>
        </div>
        {pageState}
      </div>
    </div>
  );
}
