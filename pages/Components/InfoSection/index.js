import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from "@fortawesome/free-solid-svg-icons"
import styles from "./InfoSection.module.css";

function InfoCon() {
    const config = {
        marginTop: "300px",
        fontSize: "45px",
        lineHeight: "0.5"
    }

    return (
        <>
            <Container id="Home">
                <Row style={config}>
                    <Col sm={{ span: 10, offset: 0 }} md={{ span: 10, offset: 0 }} lg={{ span: 10, offset: 0 }}>
                        <p className="text-success">
                            Hello,
                        </p>
                        <br />
                        <p className="text-danger">my name is James,</p>
                        <br />
                        <p className="text-primary">
                            I am a Full-Stack Web Developer.
                        </p>
                    </Col>
                    <Col sm={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                        <FontAwesomeIcon size={"5x"} icon={faCog} className={`${styles.cog} text-primary`} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InfoCon;