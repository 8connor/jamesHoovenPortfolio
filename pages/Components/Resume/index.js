import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./Resume.module.css";

function Resume() {
    return (
        <Container id="resume">
            <Row className="justify-content-center">
                <Col>
                    <iframe src="/Resume.pdf" title="myResume" className={Styles.resume}>
                    </iframe>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className={Styles.mobileCompatible}>
                    <p className="text-danger">
                        The resume cannot render here on mobile. You may download the resume by clicking the button below.
                    </p>
                    <a href="/Resume.pdf" className="btn btn-primary" download>
                        Download Here!
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;