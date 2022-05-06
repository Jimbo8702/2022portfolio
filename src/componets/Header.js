import React from "react";
import Typewriter from "typewriter-effect";
export default function header() {
  return (
    <div className="head d-flex justify-content-center align-items-center">
      <div className="head-container d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-center align-items-center box">
          <div>
            <h1 className="width">
              <span>
                <Typewriter
                  onInit={(typewriter) =>
                    typewriter
                      .typeString("James_Sgarella")
                      .typeString(".javaScript")
                      .pauseFor(1000)
                      .deleteChars(10)
                      .pauseFor(200)
                      .typeString("HTML")
                      .pauseFor(1000)
                      .deleteChars(4)
                      .pauseFor(200)
                      .typeString("CSS")
                      .pauseFor(1000)
                      .deleteChars(3)
                      .pauseFor(200)
                      .typeString("SQL")
                      .pauseFor(1000)
                      .deleteChars(3)
                      .pauseFor(200)
                      .typeString("MongoDB")
                      .pauseFor(1000)
                      .deleteChars(8)
                      .pauseFor(200)
                      .typeString('["Python"]')
                      .pauseFor(1000)
                      .deleteChars(10)
                      .pauseFor(200)
                      .typeString(".Solidity")
                      .pauseFor(1000)
                      .deleteChars(9)
                      .pauseFor(200)
                      .start()
                  }
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center white-border box">
          <h1>gif</h1>
        </div>
      </div>
    </div>
  );
}
