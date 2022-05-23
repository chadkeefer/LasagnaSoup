import { Button, Card, Row, Col, Container, CloseButton } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from "react-router-dom";
import data from "./data.json";

export default function DrawingViewer() {
  let params = useParams();
  var sourceImage;
  var sourceIndex;
  var nextIndex;
  var prevIndex;

  if ((sourceIndex = data.findIndex((drawing) => drawing.name === params.drawingID))
    !== -1) {

    sourceImage = data[sourceIndex];
    nextIndex = sourceIndex + 1;
    prevIndex = sourceIndex - 1;

    if (nextIndex >= data.length)
      nextIndex = 0;
    if (prevIndex < 0)
      prevIndex = data.length - 1;

    return (
      <div style={{position:"fixed", padding:"0", margin:"0",
        top:"0", left:"0", width: "100%", height: "100%",
        background:"rgba(255,255,255,0.5)", zIndex:"999999", overflow:"scroll",
        display:"flex", justifyContent:"center", alignItems: "center"}}>
          

      <LinkContainer to={`/drawings/`} style={{position: "absolute", top: "10px", left: "10px"}}>
      <CloseButton variant="dark"/>

      </LinkContainer>
      <Container>
        <Row style={{display:"flex", justifyContent:"center", alignItems: "center", maxHeight:"100vh"}}>
          <Col lg={8} sm={12} style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <img className="shadow" style={{maxHeight:"100vh", maxWidth:"100%"}} src={sourceImage.src} alt={sourceImage.name} />
          </Col>

          <Col lg={4} sm={12}>
            <Card className="shadow" style={{marginTop:"10px", marginBottom:"10px"}}>
              <Card.Body>
                <Card.Title>{sourceImage.name}</Card.Title>
                <Card.Text>
                  {sourceImage.description}
                </Card.Text>
                <LinkContainer to={`/drawings/${data[prevIndex].name}`}>
                  <Button variant="dark">Prev</Button>
                </LinkContainer>
                <LinkContainer to={`/drawings/${data[nextIndex].name}`}>
                  <Button variant="dark">Next</Button>
                </LinkContainer>
                <LinkContainer to={`/drawings/`}>
                  <Button variant="dark">Close</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
  else {
    return (
      <Container>
        <h3>The image you are searching for ({params.drawingID}) does not exist</h3>
      </Container>
    );
  }

}