import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import anime from "animejs/lib/anime";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Styles from "./ContactInfo.module.css";

function Contact() {
    useEffect(() => {
        anime({
            targets: ".contactCard",
            scale: [0, 1],
            easing: 'easeInOutExpo',
            delay: function (el, i, l) {
                return i * 100;
            }
        });
    }, []);

    return (
        <Container className={Styles.contactCon}>
            <Row className="justify-content-center">
                <Card className="bg-success mt-5 shadow contactCard" id="Contact">
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