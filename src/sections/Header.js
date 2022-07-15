import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import sql from "../assets/sql.png";
import mongo from "../assets/mongo.png";
import solidity from "../assets/sol.png";
export default function Header() {
  const [image, setImage] = useState([]);

  return (
    <div className="head d-flex justify-content-center align-items-center">
      <div className="head-container d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-center align-items-center box">
          <div className="title-container">
            <h1 className="width">
              <span>
                <Typewriter
                  onInit={(typewriter) =>
                    typewriter
                      .typeString("James_Sgarella")
                      .pauseFor(1000)
                      .typeString(".javaScript")
                      .callFunction(() => setImage(javascript))
                      .pauseFor(1000)
                      .deleteChars(10)
                      .pauseFor(200)
                      .typeString("HTML")
                      .callFunction(() => setImage(html))
                      .pauseFor(1000)
                      .deleteChars(4)
                      .pauseFor(200)
                      .typeString("CSS")
                      .callFunction(() => setImage(css))
                      .pauseFor(1000)
                      .deleteChars(3)
                      .pauseFor(200)
                      .typeString("SQL")
                      .callFunction(() => setImage(sql))
                      .pauseFor(1000)
                      .deleteChars(3)
                      .pauseFor(200)
                      .typeString("MongoDB")
                      .callFunction(() => setImage(mongo))
                      .pauseFor(1000)
                      .deleteChars(8)
                      .pauseFor(200)
                      .typeString('["Python"]')
                      .callFunction(() => setImage(python))
                      .pauseFor(1000)
                      .deleteChars(10)
                      .pauseFor(200)
                      .typeString(".Solidity")
                      .callFunction(() => setImage(solidity))
                      .pauseFor(1000)
                      .deleteChars(9)
                      .callFunction(() => setImage([]))
                      .pauseFor(200)
                      .start()
                  }
                />
              </span>
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center white-border box">
          {image[0] != null ? (
            <div>
              <img className="img-custom" src={image} />
            </div>
          ) : (
            <div>
              <h1 className="font">Welcome!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
