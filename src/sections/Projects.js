import React, { useState } from "react";
import Focus from "../img/focus.png";
import Micro from "../img/micro.png";
import Description from "../components/Description";
import blog from "../img/blog.png";
export default function Projects() {
  const focusDescription = `Focus is a communication app with a minimalistic design that allows for simple communication with
     friend through a friend code. Focus uses real-time communication to allow friends to join chatrooms from anywhere. Everyone has a uuid
     that acts like a phone number. This allows for you to save contacts on the site to start a converstaion with at anytime.`;
  const focusTechDescription = `Focus gave me the opportunity to practice with real-time communication and flex my full stack skills while using express.js and React.`;

  const microservicesDescription = `This is a REST API I coded to practice my django skills as well as flask. Each app has its own 
  dockerfile and is set up with its own SQL database. A frontend makes a call to the flask app that then makes an interal api 
  call to the django app to get products and like products. The frontend is a work in progress.`;

  const microserviceTechDescription = `This REST API has CRUD routes for products in an Ecom store as well as the ability to create a simple user. This was my first expierence using Docker to 
  build containers for each separate application as well as separate SQL Databases.`;

  const simpleBlogApp = `This is a simple blog application made with django. 
  Users can login and leave comments on blogs that are posted. This was another to practice with django and sharpen my skills. `;

  const simpleBlogAppTechDescription = `This was built in django and is mainly function based views that render HTML templates. There is simple login authentification and registration. Each blog has basic CRUD routes.`;
  const focusTech = [
    "Node.js",
    "Express.js",
    "React",
    "MongoDB",
    "GraphQL",
    "Socket.io",
    "Apollo Sever Express",
    "Bootstrap",
  ];
  const blogTech = ["Django", "SQL", "HTML", "CSS"];

  const microserviceTech = [
    "Django + Django REST",
    "Flask",
    "MySQL",
    "Docker",
    "RabbitMQ",
  ];

  return (
    <div className="mt-4">
      <div className="project-box">
        <div className="half-box border-custom box-shadow">
          <Description
            tech={focusTech}
            techDescription={focusTechDescription}
            title="Focus"
            description={focusDescription}
            github="https://github.com/sagegrayson/PR3-Focus"
            link="https://focus-deploy.herokuapp.com"
          />
        </div>

        <div className="half-box mobile-img">
          <div>
            <img
              className=" img-fluid mx-auto projectphoto "
              alt="500x500"
              src={Focus}
            />
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="half-box mobile-img">
          <div>
            <img
              className=" img-fluid mx-auto projectphoto "
              alt="500x500"
              src={Micro}
            />
          </div>
        </div>
        <div className="half-box border-custom box-shadow">
          <Description
            tech={microserviceTech}
            techDescription={microserviceTechDescription}
            title="Ecom API"
            description={microservicesDescription}
            github="https://github.com/Jimbo8702/microservices"
            link=""
          />
        </div>
      </div>
      <div className="project-box">
        <div className="half-box border-custom box-shadow">
          <Description
            tech={blogTech}
            techDescription={simpleBlogAppTechDescription}
            title="Py Blog"
            description={simpleBlogApp}
            github="https://github.com/Jimbo8702/SgarellaBlog.git"
            link=""
          />
        </div>
        <div className="half-box mobile-img">
          <div>
            <img
              className=" img-fluid mx-auto projectphoto "
              alt="500x500"
              src={blog}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
