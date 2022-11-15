import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutme.css";
import "../../assets/Resume/Keanu_Resume.pdf";

<div style={{backgroundColor: "#FF0000"}}>red</div>


const aboutMe = () => {
  return (
    <div>
      <Container style={{ width: "75%" }}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} className="text-center">
            <h1>
              <strong>About Me</strong>
            </h1>
            <br />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={12} sm={12} className="text-center">
            <img
              src={require("../../assets/images/profilepic.jpeg")}
              alt="Profile"
              className="img-fluid thumbnail"
              id="profileimg"
            />
          </Col>
          <Col lg={8} md={12} sm={12} className="text-center">
            <p>
              I am a Full Stack Web Developer with an intense passion for code
              and problem solving. Skilled in HTML, HTML5, CSS, CSS3,
              JavaScript, jQuery, Bootstrap React.JS, Node.JS, Express, MySQL,
              MongoDB, Handlebars, Sequelize, AJAX, JSON, Web API. Coding fills
              me with great satisfaction. I am eager to make this into my life
              long career choice.
            </p>
            <p>
              "The capacity to learn is a gift; the ability to learn is a skill;
              the willingness to learn is a choice" -Brian Herbert.
            </p>
            <br />
            <br />
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} className="text-center" id="icons">
            <h5>Contact me. I look forward to working with you.</h5>
            <a href="mailto:keanurivers404@gmail.com" className="left-margin">
              <i className="fa fa-envelope fa-3x" aria-hidden="false"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/keanu-rivers/"
              rel="noopener noreferrer"
              target="_blank"
              className="left-margin"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://github.com/KeanuRivers"
              rel="noopener noreferrer"
              target="_blank"
              className="left-margin"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
            {/* <a
              href={Resume}
              rel="noopener noreferrer"
              target="_blank"
              className="left-margin"
            >
              <i className="fas fa-file fa-3x"></i>
            </a> */}
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default aboutMe;