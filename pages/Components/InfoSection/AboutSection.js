import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./InfoSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faNode,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.01,
    };

    let target = document.getElementById("aboutCard");

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.classList.add("active");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
  }, []);

  return (
    <Container className={`${Styles.aboutCon}`}>
      <Row>
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
        >
          <Card className="shadow">
            <Card.Title className="ml-3 text-primary">
              <h1>My skills</h1>
            </Card.Title>
            <Card.Body className="text-danger">
              <Row className="justify-content-center">
                <FontAwesomeIcon
                  icon={faCss3}
                  size="4x"
                  className={Styles.skillsIcon}
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="4x"
                  className={Styles.skillsIcon}
                />
                <FontAwesomeIcon
                  icon={faJsSquare}
                  size="4x"
                  className={Styles.skillsIcon}
                />
                <FontAwesomeIcon
                  icon={faNode}
                  size="5x"
                  className={Styles.skillsIcon}
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
        >
          <Card className={`shadow`} id="aboutCard">
            <Card.Title className="ml-3 h1 text-primary">
              <h1>About</h1>
            </Card.Title>
            <Card.Body>
              <p>
                Full-stack web developer that is focused on making an enjoyable
                user experience on the web. I recently graduated from Vanderbilt
                University Full-Stack Web Development Bootcamp, and have
                acquired many skills relating to web development. The more
                notable skills are my ability to work efficiently with
                JavaScript, React.js, Node.js, HTML, CSS, MongoDB, SQL, and
                JQuery. I focus on making my websites compatible with mobile
                responsive designs. I am looking forward to utilizing my
                interpersonal skills from a background in the service industry
                and my newly acquired skills provide added-value to an
                organization through technology and being detail-oriented.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
