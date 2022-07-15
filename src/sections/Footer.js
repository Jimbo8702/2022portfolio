import React from "react";
import resume from '../assets/resume.pdf'
export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className="footer-container">
        <h3 className="mt-3 contact">Contact Me</h3>
        <div className="contact-info">
          <h4>Email: Jimbo8702@gmail.com</h4>
          <h4>Phone: 201-250-5521 </h4>
        </div>
        <div className="res">
          <a className="link" href={resume}>
            Resume
          </a>
          <a className="link" href="https://github.com/Jimbo8702">
            Github
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/james-sgarella-35a8b8197/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

// footer with phone number email resume link github linkedin

// need a top mini nav bar to click to a spot on the site
