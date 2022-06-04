import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import chad from "./WelcomeToLS.png";
import legion from "./Legion.jpeg";

import { Helmet } from "react-helmet";

export default function Home() {

    //get latest 3 drawings from json file
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('/data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                myJson.splice(3)
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {/* change html meta data for page */}
            <Helmet>
                <title>Lasagna Soup - Home</title>
                <meta name="description" 
                content="Welcome to Lasagna Soup! This is my personal website 
                where you can see the drawings and comics I am working on." />
            </Helmet>

            {/* about the website section */}
            <div className="pageContentPadding">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col xl={4} lg={5} md={12} className="handWritten" style={{ display: 'inline-block' }}>
                            <h1 className="handWritten" style={{ textAlign: 'center' }}>What Is Lasagna Soup?</h1>
                            <p>Lasagna soup is kind of like lasagna except if you took all the ingredients
                                you would use to make lasagna and stuck them inside a bowl of tomato broth.
                                Everything good about lasagna is reduced to a watery pool of mediocrity
                                that nobody asked for. I would say this website is not unlike lasagna soup in that regard.
                                "A pool of mediocrity that nobody asked for."</p>
                            <p>Here you can check out all of my
                                <a href="./drawings/" style={{ textDecoration: "none" }}> drawings</a>,
                                <a href="./comics/" style={{ textDecoration: "none" }}> comics</a>, and
                                anything else I might be working on!</p>

                        </Col>
                        <Col xl={8} lg={7} md={12}>
                            <img src={chad} alt="Chad welcomes you to Lasagna Soup" style={{ maxWidth: "100%" }} />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* latest posts section */}
            <div className="yellowSection">
                <Container>
                    <Row style={{ padding: '30px 0px 30px 0px' }}>
                        <h1 className="handWritten" style={{ textAlign: 'center'}}>Latest Posts</h1>
                        {data.map((drawing) => (
                            <Col className="d-flex align-items-start justify-content-center" md={4} sm={6} xs={12} >

                                <Card className="objectShadow previewCard">
                                    <div className="squareImageContain">
                                        <LinkContainer className="squareImage drawThumbnail" to={`/drawings/${drawing.name}`}>
                                            <Card.Img src={drawing.src} />
                                        </LinkContainer>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{drawing.name}</Card.Title>
                                        <LinkContainer to={`/drawings/${drawing.name}`}>
                                            <Button variant="primary">Go to Drawings</Button>
                                        </LinkContainer>
                                    </Card.Body>
                                </Card>

                            </Col>))}
                    </Row>
                </Container>
            </div>

            {/* about me section */}
            <div className="yellowSection" style={{ padding: '30px 30px 30px 30px' }} >
                <Container className="bg-white objectShadow" style={{ padding: '30px 30px 30px 30px' }}>
                    <div>
                        <Row className="d-flex align-items-center justify-content-around">
                            <Col className="d-flex justify-content-center text-center" lg={4} sm={6} xs={12}>
                                <img src={legion} alt="I am legion, the world killer." style={{ width: "100%" }} />
                            </Col>
                            <Col className="handWritten" lg={8} sm={6} xs={12} style={{ display: 'inline-block', margin: '30px 0px 0px 0px' }}>
                                <h1 className="handWritten" style={{ textAlign: 'center'}}>About Me</h1>
                                <p>My name is Chad! I'm a recent Computer Science grad from SDSU, and I like drawing and making comics. I hope you enjoy checking out my art. I figured putting this  website together would be a good way to showcase my cartoons and simultaneously prove I know how to use a computer.</p>
                                <p>I'm also a huge comic book nerd and cinephile, which will probably become quite obvious as you look at everything I draw.</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}