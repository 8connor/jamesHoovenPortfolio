import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./InfoSection.module.css";
import Card from "react-bootstrap/Card";
import anime from "animejs/lib/anime"


function InfoCon() {
    useEffect(() => {
        anime({
            targets: ".introText",
            opacity: 1,
            translateX: 1900,
            delay: function (el, i, l) {
                return i * 200;
            }
        });
    }, [])

    return (
        <>
            <Container>
                <Row className={Styles.infoCon}>
                    <Col
                        sm={{ span: 12, offset: 0 }}
                        md={{ span: 12, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}

                        style={
                            {
                                marginLeft: "-1900px"
                            }
                        }
                    >
                        <p className="text-success introText">
                            Hello,
                        </p>
                        <br />
                        <p className="text-danger introText">my name is James Hooven,</p>
                        <br />
                        <p className="text-primary introText">
                            I am a Full-Stack Web Developer.
                        </p>
                    </Col>


                </Row>
                <Row className="justify-content-center">
                    <a href="#aboutCon">
                        <div className={`${Styles.arrow}`}></div>
                    </a>
                </Row>
            </Container>

            <Container className={Styles.aboutCon} id="aboutCon">
                <Row>
                    <Card>
                        <Card.Title className="ml-3 h1">
                            <h1>About</h1>
                        </Card.Title>
                        <Card.Body>
                            <p>
                                Full-stack web developer that is focused on making an enjoyable user experience on the web.
                                I recently graduated from Vanderbilt University full-stack web development bootcamp,
                                and have acquired many skills relating to web development. The more notable skills are my
                                ability to work efficiently with JavaScript, React.js, Node.js, HTML, CSS, Mongodb, SQL, and JQuery.
                                I focus on making my websites compatible with mobile responsive designs. I am looking forward to utilizing
                                my interpersonal skills from a background in the service industry and my newly acquired skills provide added-value to an
                                organization through technology and being detail-oriented.
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default InfoCon;