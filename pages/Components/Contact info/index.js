import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Styles from "./ContactInfo.module.css";

function Contact() {
    return (
        <Container className={Styles.contactCon}>
            <Row className="justify-content-center">
                <Card id="Contact">
                    <Card.Body>
                        <Row className="justify-content-center">
                            <Form className={Styles.contact}>
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
                        </Row>
                        <Row className="justify-content-center">

                            <Button>
                                Submit
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Contact;