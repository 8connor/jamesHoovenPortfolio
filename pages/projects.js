import Projects from "./Components/Projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Head from "next/head";

function ProjectPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Projects />
        </>
    )
}

export default ProjectPage;