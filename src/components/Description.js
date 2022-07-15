import React, { useState } from "react";

export default function Description({
  title,
  description,
  github,
  link,
  techDescription,
  tech,
}) {
  const [selectedNav, setSelectedNav] = useState("description");

  const projectDescription = (
    <div className=" d-flex justify-content-center align-items-center flex-column nav-body">
      <p className="text  mobile-text">{description}</p>
      <p>
        Check out the{" "}
        <span>
          <a href={github}>GitHub</a>
        </span>{" "}
        repo
      </p>
      {link ? (
        <p>
          Check out the{" "}
          <span>
            <a href={link}>demo</a>
          </span>
        </p>
      ) : null}
    </div>
  );
  const projectTech = (
    <div className="  d-flex justify-content-center align-items-center flex-column nav-body">
      <div className="d-flex justify-content-center align-items-center  flex-column">
        <p className="text  mobile-text">{techDescription} </p>
        <div className="list-container">
          {tech.map((t) => (
            <li className="list-item">{t}</li>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex justify-content-between align-content-center project-nav">
        <div
          className={
            selectedNav == "description" ? "selected-nav" : "not-selected"
          }
          onClick={() => {
            setSelectedNav("description");
          }}
        >
          <h1>{title}</h1>
        </div>
        <div
          className={selectedNav == "tech" ? "selected-nav" : "not-selected"}
          onClick={() => {
            setSelectedNav("tech");
          }}
        >
          <h1>Tech</h1>
        </div>
      </div>
      <div  >
        {selectedNav == "description" ? projectDescription : projectTech}
      </div>
    </div>
  );
}
