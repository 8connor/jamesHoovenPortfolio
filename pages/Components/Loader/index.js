import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

function Loader() {
    console.log("rendered");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleStart = () => {
        setLoading(true)
        console.log("start")
    }

    const handleEnd = () => {
        setLoading(false);
        console.log("end")
    }

    useEffect(() => {
        router.events.on("routeChangeStart", handleStart());
        router.events.on("routeChangeComplete", handleEnd());
    }, [])


    const config = {
        padding: "200px",
        backgroundColor: "white"
    }

    return (
        <Container>
            <Row className="justify-content-center">
                {loading && <h1 style={config}>LOADING</h1>}
            </Row>
        </Container>
    )
}

export default Loader;