import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Masonry.css';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Comics() {

    //retireve comics and related data from json fil
    const [comics, setData] = useState([]);
    const getData = () => {
        fetch('/comics.json'
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
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="pageContentPadding">

            {/* change html meta data */}
            <Helmet>
                <title>Lasagna Soup - Comics</title>
                <meta name="description" 
                content="Check out my comics! It's just a click away to begin reading." />
            </Helmet>

            {/* display comic thumbnails */}
            <Container>
                <Row>
                    {comics.map((comic) => (
                        <Col className="d-flex align-items-start justify-content-center" 
                        lg={3} md={4} sm={6} xs={12} >

                            <Card className="objectShadow previewCard">
                                <div className="squareImageContain">
                                    <LinkContainer className="squareImage drawThumbnail" 
                                    to={`/comics/${comic.name}`}>
                                        <Card.Img src={comic.thumbnail} />
                                    </LinkContainer>
                                </div>
                                <Card.Body>
                                    <Card.Title>{comic.name}</Card.Title>
                                    <Card.Text>{comic.description}</Card.Text>
                                    <LinkContainer to={`/comics/${comic.name}`}>
                                        <Button variant="primary">Read comic</Button>
                                    </LinkContainer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}