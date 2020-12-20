import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from "@fortawesome/free-solid-svg-icons"
import Styles from "./InfoSection.module.css";
import Card from "react-bootstrap/Card";
import anime from "animejs/lib/anime"


function InfoCon() {
    useEffect(() => {
        anime({
            targets: '.introText',
            opacity: 1,
            translateY: 50,
            rotate: {
                value: 360,
                duration: 2000,
                easing: 'easeInExpo'
            },
            delay: anime.stagger(100, { start: 1000 }),
        });
    }, [])

    return (
        <>
            <Container id="Home">
                <Row className={Styles.infoCon}>
                    <Col sm={{ span: 10, offset: 0 }} md={{ span: 10, offset: 0 }} lg={{ span: 10, offset: 0 }}>
                        <p className="text-success introText" style={{ marginBottom: "-10px" }}>
                            Hello,
                        </p>
                        <br />
                        <p className="text-danger introText" style={{ marginBottom: "-10px" }}>my name is James Hooven,</p>
                        <br />
                        <p className="text-primary introText">
                            I am a Full-Stack Web Developer.
                        </p>
                    </Col>
                    <Col sm={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                        <FontAwesomeIcon size={"5x"} icon={faCog} className={`${Styles.cog} text-primary`} />
                    </Col>
                </Row>
            </Container>
            <Container className={Styles.aboutCon}>
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