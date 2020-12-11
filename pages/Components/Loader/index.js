import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

function Loader(props) {
    const config = {
        padding: "200px",
        backgroundColor: "white"
    }

    return (

        props.isloading ? <Container>
            <Row className="justify-content-center">
                <h1 style={config}>LOADING</h1>
            </Row>
        </Container> : null


    )
}

export default Loader;