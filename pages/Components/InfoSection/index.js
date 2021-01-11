import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./InfoSection.module.css";
import Card from "react-bootstrap/Card";
import anime from "animejs/lib/anime";
import PartCon from "../PartCon";

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

      <Container className={`${Styles.aboutCon}`}>
        <Row>
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
                  Full-stack web developer that is focused on making an
                  enjoyable user experience on the web. I recently graduated
                  from Vanderbilt University Full-Stack Web Development
                  Bootcamp, and have acquired many skills relating to web
                  development. The more notable skills are my ability to work
                  efficiently with JavaScript, React.js, Node.js, HTML, CSS,
                  MongoDB, SQL, and JQuery. I focus on making my websites
                  compatible with mobile responsive designs. I am looking
                  forward to utilizing my interpersonal skills from a background
                  in the service industry and my newly acquired skills provide
                  added-value to an organization through technology and being
                  detail-oriented.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InfoCon;
