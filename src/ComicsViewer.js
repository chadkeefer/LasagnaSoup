import { Container, Row, Col } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function ComicLoader() {
    //retrieve comic info
    const [comics, setData] = useState();
    useEffect(() => {
        fetch('/comics.json')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    //if info is retrieved display comic
    return (
        <div>
            {comics && <ComicViewer comics={comics} />}
        </div>
    );
}

function ComicViewer({ comics }) {
    let params = useParams();      //comic requested via url parameter

    var sourceComic;        //object holding data for requested comic
    var sourceIndex;        //index of comic in json object

    //display requested comic if it exists
    if ((sourceIndex = comics.findIndex((comic) => comic.name === params.comicID))
        !== -1) {

        sourceComic = comics[sourceIndex];

        return (
            <div className="pageContentPadding">
                {/* change html meta data for requested page */}
                <Helmet>
                    <title>Comics - {params.comicID}</title>
                    <meta name="description" content={sourceComic.description} />
                </Helmet>


                <Container>

                    {/* display comic name and description */}
                    <Row className="d-flex align-items-center handWritten">
                        <h1 className="handWritten">{sourceComic.name}</h1>
                        <p>{sourceComic.description}</p>
                    </Row>

                    {/* back button */}
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <a className="handWritten backButton" href="/comics/">Back to Comics</a>
                    </div>

                    {/* display comic pages */}
                    <Row className="d-flex align-items-start justify-content-center">
                        <Col xl={5} lg={6} md={8} sm={12}>
                            <img className="objectShadow comicPage" style={{ width: "100%" }} 
                            src={"/Comics/" + sourceComic.folder + "/titlePage.jpg"} alt="title page"/>

                        </Col>
                        {[...Array(sourceComic.pageCount).keys()].map((drawing, page) => (
                            <Col xl={5} lg={6} md={8} sm={12}>
                                <img className="objectShadow comicPage" style={{ width: "100%" }} 
                                src={"/Comics/" + sourceComic.folder + "/" + (page + 1) + ".jpg"} alt="inside page" />
                                <p className="handWritten pageNumber">{page + 1}</p>
                            </Col>
                        ))}
                    </Row >

                    <div style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}>
                        <a className="handWritten backButton" href="/comics/">Back to Comics</a>
                    </div>

                </Container>
            </div>
        );
    }

    //redirect if drawing doesn't exist
    else
        return <Navigate replace to="/comics/" />;
}