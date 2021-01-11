import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./InfoSection.module.css";
import anime from "animejs/lib/anime";
import PartCon from "../PartCon";
import AboutSection from "./AboutSection";

function InfoCon() {
  useEffect(() => {
    anime({
      targets: ".introBox .introText",
      opacity: 1,
      translateX: 1900,
      delay: function (el, i, l) {
        return i * 200;
      },
    });

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
    <>
      <PartCon>
        <Container>
          <Row className={`${Styles.infoCon} justify-content-center`}>
            <Col
              sm={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              className={Styles.infoTextCol}
            >
              <div className="introBox">
                <p className="text-success introText">Hello,</p>
                <br />
                <p className="text-danger introText">
                  my name is James Hooven,
                </p>
                <br />
                <p className="text-primary introText">
                  I am a Full-Stack Web Developer.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <a
              className={`btn btn-dark shadow ${Styles.sendBtn}`}
              href="#projects"
            >
              Check out my stuff!
            </a>
          </Row>
        </Container>
      </PartCon>

      <AboutSection />
    </>
  );
}

export default InfoCon;
