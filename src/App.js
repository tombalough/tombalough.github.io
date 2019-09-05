import React from "react";
//import logo from "./logo.svg";
import headshotclose from "./img/headshotclose.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  render() {
    return (
      <div className="p-8 h-screen">
        <div className="flex flex-col w-3/12 float-left h-full">
          <div className="mb-4 w-8/12 mx-auto">
            <img
              className="rounded-full"
              src={headshotclose}
              alt="headshot"
            ></img>
          </div>
          <h1 className="mx-auto font-sans text-xl text-gray-700 font-light">
            Tom Balough
          </h1>
          <hr></hr>
          <div className="flex justify-center">
            <div className="mx-3 text-gray-700">
              <a href="https://www.linkedin.com/in/tombalough/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="mx-3 text-gray-700">
              <a href="https://github.com/tombalough">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="mx-3 text-gray-700">
              <a href="mailto:tombalough@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
