import { Card, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import data from "./data.json";
import Masonry from 'react-masonry-css';
import './Masonry.css';
import { LinkContainer } from 'react-router-bootstrap';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

export default function Drawings() {
  return (
    <div>
      <Outlet />
    <Container>
      <Masonry breakpointCols={breakpointColumnsObj} 
        className="my-masonry-grid" 
        columnClassName="my-masonry-grid_column">

      {data.map((drawing) => (
        <LinkContainer className="shadow" style={{ display: "block", margin: "1rem 0" }} 
        to={`/drawings/${drawing.name}`} key={drawing.name}>
        <Card border="none">
          <Card.Img variant="top" src={drawing.src} alt={drawing.name} style={{cursor: "pointer"}}/>
          <Card.Body style={{cursor: "pointer"}}>
            <Card.Title>{drawing.name}</Card.Title>
            <Card.Text>
              {drawing.description}
            </Card.Text>
          </Card.Body>
        </Card>
        </LinkContainer>
        
        ))}

        </Masonry>
    </Container>
    </div>
  );
}