import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Masonry from 'react-masonry-css';
import './Masonry.css';

//breaking points for masonry react componet
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

export default function Drawings() {

  //fetch drawings and related data from json file
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
          <title>Lasagna Soup - Drawings</title>
          <meta name="description" content="Check out all my drawings!" />
      </Helmet>

      <Outlet />

      {/* display masonry drawing gallery */}
      <Container>
        <Masonry breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">

          {data.map((drawing) => (
            <LinkContainer className="objectShadow drawingLink" to={`/drawings/${drawing.name}`} key={drawing.name}>
              <img className="drawThumbnail" src={drawing.src} alt={drawing.name} style={{ cursor: "pointer" }} />
            </LinkContainer>
          ))}
        </Masonry>
      </Container>
    </div>
  );
}