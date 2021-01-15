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
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  useEffect(() => {
    let options = {
      root: document.querySelector("#skillCard  "),
      rootMargin: "0px",
      threshold: 0.1,
    };

    let target1 = document.getElementById("aboutCard");
    let target2 = document.getElementById("skillCard");

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target1.classList.remove("hidden")
          target2.classList.remove("hidden");
          target1.classList.add("active");
          target2.classList.add("active");
        }else{
          target1.classList.add("hidden")
          target2.classList.add("hidden");
          target1.classList.remove("active");
          target2.classList.remove("active");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target1);
  }, []);

  return (
    <Container className={`${Styles.aboutCon}`}>
      <Row>
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
        >
          <Card className="shadow" id="skillCard">
            <Card.Title className="ml-3 mt-3 text-primary">
              <h1>My skills</h1>
            </Card.Title>
            <Card.Body className="text-danger">
              <Row className="justify-content-center">
                <FontAwesomeIcon
                  icon={faCss3}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.cssIcon}`}
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.htmlIcon}`}
                />
                <FontAwesomeIcon
                  icon={faJsSquare}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.javaScriptIcon}`}
                />
                <FontAwesomeIcon
                  icon={faDatabase}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.databaseIcon}`}
                />
                <FontAwesomeIcon
                  icon={faSass}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.sassIcon}`}
                />
                <FontAwesomeIcon
                  icon={faNode}
                  size="8x"
                  className={`${Styles.skillsIcon} ${Styles.nodeJsIcon}`}
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
          <Card className="shadow" id="aboutCard">
            <Card.Title className="ml-3 mt-3 text-primary">
              <h1>About me</h1>
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
