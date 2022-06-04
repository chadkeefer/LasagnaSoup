import { Button, Container, Modal } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function DrawingLoader() {
  //retrieve drawing info
  const [data, setData] = useState();
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  //if info is retrieved display comic
  return (
    <div>
      {data && <DrawingViewer data={data} />}
    </div>
  );
}

function DrawingViewer({ data }) {
  const navigate = useNavigate();   //for page redirection

  //return to drawings page when window is closed
  const closeModal = () => navigate(`/drawings`)

  let params = useParams();   //comic requested via url parameter

  var sourceImage;    //json object containing all requested drawing data
  var sourceIndex;    //location of drawing in json file
  var nextIndex;      //index of next drawing in json file
  var prevIndex;      //index of previous drawing in json file

  //display requested drawing if it exists
  if ((sourceIndex = data.findIndex((drawing) => drawing.name === params.drawingID))
    !== -1) {

    sourceImage = data[sourceIndex];
    nextIndex = sourceIndex + 1;
    prevIndex = sourceIndex - 1;

    //if at end of array, next index is first array object
    if (nextIndex >= data.length)
      nextIndex = 0;
    //if at start of array, prev index is last array object
    if (prevIndex < 0)
      prevIndex = data.length - 1;

    return (

      <Container>
        {/* change html meta data for requested page */}
        <Helmet>
          <title>Drawings - {params.drawingID}</title>
          <meta name="description" content={sourceImage.description} />
        </Helmet>

        {/* display requested drawing */}
        <Modal size="lg" show={true} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title><h2>{sourceImage.name}</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><p>{sourceImage.description}</p></Modal.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img className="shadow" style={{ objectfit: "contain", maxHeight: "100vh", maxWidth: "100%" }}
              src={sourceImage.src} alt={sourceImage.name} />
          </div>

          <Modal.Footer>
            <LinkContainer to={`/drawings/${data[prevIndex].name}`}>
              <Button variant="primary">Prev</Button>
            </LinkContainer>

            <LinkContainer to={`/drawings/${data[nextIndex].name}`}>
              <Button variant="primary">Next</Button>
            </LinkContainer>

            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    );
  }
  //redirect if drawing doesn't exist
  else
    return <Navigate replace to="/drawings" />;
}