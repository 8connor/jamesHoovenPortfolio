import React from "react";
import Container from "react-bootstrap/Container";
import Img from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Styles from "./Projects.module.css";

function Projects() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <h1 className={Styles.projTitle}>Projects</h1>
                </Row>
            </Container>
            <Container className={Styles.projCon} id="projects">
                <Row>
                    <Col sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                        <Card className={Styles.infoCards}>
                            <Img src="/images/gradeBot.png" width="400px" height="400px"></Img>

                            <Card.Body>
                                <Card.Title>
                                    GradeBot
                            </Card.Title>
                                <Card.Text>
                                    This is GradeBot!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                        <Card className={Styles.infoCards}>
                            <Img src="/images/collabSoup.png" width="400px" height="400px"></Img>
                            <Card.Body>
                                <Card.Title>
                                    CollabSoup
                            </Card.Title>
                                <Card.Text>
                                    This is CollabSoup!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                        <Card className={Styles.infoCards}>
                            <Img src="/images/homeFinder.png" width="400px" height="400px"></Img>
                            <Card.Body>
                                <Card.Title>
                                    HomeFinder
                            </Card.Title>
                                <Card.Text>
                                    This is HomeFinder!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Projects;