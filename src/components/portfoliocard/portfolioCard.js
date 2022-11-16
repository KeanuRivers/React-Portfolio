import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./PortfolioCard.css";
const imageContext = require.context("../../assets/images/", true)



function PortfolioCard(props) {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="cardBody">
        <Card.Img
          responsive="true"
          variant="top"
          src={imageContext("./" + props.image)}
          alt={props.altTag}
        />
        <Card.Body className="text">
          <Card.Title className="cardTitle">{props.title}</Card.Title>
          <Card.Text id="text1">
            {props.description}
            <br />
            {props.languages}
          </Card.Text>
          <Row className="anchorRow">
            {props.anchorLive && (
              <Col md={6} sm={4} className="anchor" responsive="true">
                <a
                  id="anchor1"
                  className="button"
                  href={props.anchorLive}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live
                </a>
              </Col>
            )}
            <Col md={6} sm={4} className="anchor">
              <a
                id="anchor2"
                className="button"
                href={props.anchorGithub}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PortfolioCard;
