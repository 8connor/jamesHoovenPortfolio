import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Img from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={`bg-success ${Styles.projSection}`}>
      <Container className={Styles.projCon} id="projects">
        <Row className="justify-content-center">
          <Col
            sm={{ span: 6, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
          >
            <Card
              className={`${Styles.infoCards} projCards shadow bg-dark text-light`}
            >
              <Img
                src="/images/gradeBot.png"
                width="400px"
                height="400px"
              ></Img>

              <Card.Body>
                <Card.Title>GradeBot</Card.Title>
                <Card.Text>
                  gradeBot is a web application developed to create a more
                  modernized way of keeping track of student grades from a
                  teacher, administrator, and even student perspective.
                  <br />
                  <br />
                  <a
                    className="btn btn-primary mr-3"
                    href="https://grade-bot.herokuapp.com/"
                    target="_blank"
                  >
                    Deployment
                  </a>
                  <a
                    className="btn btn-primary mr-3"
                    href="https://github.com/8connor/gradeBot"
                    target="_blank"
                  >
                    Github
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={{ span: 6, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
          >
            <Card
              className={`${Styles.infoCards} projCards shadow bg-dark text-light`}
            >
              <Img
                src="/images/collabSoup.png"
                width="400px"
                height="400px"
              ></Img>
              <Card.Body>
                <Card.Title>CollabSoup</Card.Title>
                <Card.Text>
                  Collab soup is a website dedicated to serving the developer
                  community. We have personally found ourselves in the past
                  looking for help on projects that were out of our grasp to
                  handle alone. This website was created to make collaborating
                  with other developers easier.
                  <br />
                  <br />
                  <a
                    className="btn btn-primary mr-3"
                    href="https://sheltered-sierra-68964.herokuapp.com/"
                    target="_blank"
                  >
                    Deployment
                  </a>
                  <a
                    className="btn btn-primary mr-3"
                    href="https://github.com/leivanoe1011/Collab_Soup"
                    target="_blank"
                  >
                    Github
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={{ span: 6, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
          >
            <Card
              className={`${Styles.infoCards} projCards shadow bg-dark text-light`}
            >
              <Img
                src="/images/homeFinder.png"
                width="400px"
                height="400px"
              ></Img>
              <Card.Body>
                <Card.Title>HomeFinder</Card.Title>
                <Card.Text>
                  Home finder is a web application that leverages the
                  realtorAPI. This API allows us to search through realtor
                  listings all over the U.S. and display them in an appealing
                  fashion.
                  <br />
                  <br />
                  <a
                    className="btn btn-primary mr-3"
                    href="https://leivanoe1011.github.io/home_finder_v2/index.html"
                    target="_blank"
                  >
                    Deployment
                  </a>
                  <a
                    className="btn btn-primary mr-3"
                    href="https://github.com/leivanoe1011/home_finder_v2"
                    target="_blank"
                  >
                    Github
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
