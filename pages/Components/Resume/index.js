import React from "react";
import Col from "react-bootstrap/Col";
import Styles from "./Resume.module.css";

function Resume() {
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
          Download
        </a>
      </Col>
    </>
  );
}

export default Resume;
