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
                    <iframe src="/Resume.pdf" title="myResume" className={`${Styles.resume}`}>
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;