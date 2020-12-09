import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
    return (
        <Container id="resume">
            <Row className="justify-content-center">
                <Col>
                    <iframe src="/Resume.pdf" height="1000" width="1000" title="myResume">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;