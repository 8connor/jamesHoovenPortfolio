import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./Resume.module.css";
import anime from "animejs/lib/anime";

function Resume() {
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.01,
    };

    let target = document.getElementById("projects");

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
    <Container id="resume">
      <Row className="justify-content-center ml-5">
        <Col>
          <iframe
            src="/Resume.pdf"
            title="myResume"
            className={`${Styles.resume} resumeFrame`}
          ></iframe>
        </Col>
      </Row>
      <Row className="text-center">
        <Col className={Styles.mobileCompatible}>
          <p className="text-danger">
            The resume cannot render here on mobile. You may download the resume
            by clicking the button below.
          </p>
          <a href="/Resume.pdf" className="btn btn-primary" download>
            Download Here!
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
