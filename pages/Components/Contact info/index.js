import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "./ContactInfo.module.css";

function Contact() {
    return (
        <Container className={styles.contactInfo}>
            <Row className="justify-content-center">
                <Card id="Contact" style={{ width: "500px" }}>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Label>First and last name</Form.Label>
                                <Form.Control type="fname" placeholder="John Doe" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{ resize: "none" }} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Contact;