import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Styles from "./ContactInfo.module.css";
import emailjs from "emailjs-com";
import Resume from "../Resume";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_no22119",
        "template_fbgakbo",
        e.target,
        "user_tssWZv8azwNWJGRvDkwsl"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("contactForm").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-dark">
      <Container className={`${Styles.contactCon}`}>
        <Row className="justify-content-center">
          <Col sm={{ span: 12, offset: 0 }} md={{ span: 5 }} lg={{ span: 5 }} className="mt-4">
            <Card className=" shadow contactCard text-dark" id="contact">
              <Card.Title className="text-center bg-light">
                <h4 className="mt-4">Contact me</h4>
              </Card.Title>
              <Card.Body>
                <Row className="justify-content-center">
                  <Form
                    className={Styles.contact}
                    onSubmit={(e) => sendEmail(e)}
                    id="contactForm"
                  >
                    <Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="from_email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>First and last name</Form.Label>
                      <Form.Control
                        type="fname"
                        placeholder="John Doe"
                        name="from_name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Content</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        style={{ resize: "none" }}
                        name="message"
                      />
                    </Form.Group>
                    <Row className="justify-content-center">
                      <Button type="submit" value="Send" >
                        Submit
                      </Button>
                    </Row>
                  </Form>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Resume />
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
