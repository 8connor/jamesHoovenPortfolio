import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./Resume.module.css";

function Resume() {
  // useEffect(() => {
  //   let options = {
  //     root: document.querySelector("#scrollArea"),
  //     rootMargin: "0px",
  //     threshold: 0.01,
  //   };

  //   let target = document.getElementById("resume");

  //   let callback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         target.classList.add("active");
  //       }
  //     });
  //   };

  //   let observer = new IntersectionObserver(callback, options);

  //   observer.observe(target);
  // }, []);

  return (
    <>
      <Col sm={{ span: 12, offset: 0 }} md={{ span: 7 }} lg={{ span: 7 }}>
        <iframe
          src="/Resume.pdf"
          title="myResume"
          id="resume"
          className={`${Styles.resume} resumeFrame`}
        ></iframe>
      </Col>
      <Col
        sm={{ span: 12, offset: 0 }}
        md={{ span: 6 }}
        lg={{ span: 6 }}
        className={Styles.mobileCompatible}
      >
        <p className="text-danger">
          The resume cannot render here on mobile. You may download the resume
          by clicking the button below.
        </p>
        <a href="/Resume.pdf" className="btn btn-primary" download>
          Download Here!
        </a>
      </Col>
    </>
  );
}

export default Resume;
