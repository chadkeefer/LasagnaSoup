import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customTheme.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  const location = useLocation();
  console.log(location.pathname);
  var redirect = false;
  if(location.pathname === "/")
    redirect = true

  return (
    <div>
      <Container>
        <img src={logo} alt="logo" style={{maxHeight: "150px", maxWidth: "100%", paddingTop: "10px", paddingBottom: "10px"}}></img>
      </Container>
    <Navbar collapseOnSelect expand="sm" bg="white" variant="light" sticky="top">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/home">
          {/*<LinkContainer to="/home">
            <Nav.Link eventkey="home">Home</Nav.Link>
          </LinkContainer>*/}
          <LinkContainer to="/drawings">
            <Nav.Link eventkey="drawings">Drawings</Nav.Link>
          </LinkContainer>
          {/*
          <LinkContainer to="/comics">
            <Nav.Link eventkey="comics">Comics</Nav.Link>
          </LinkContainer>
        */}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    {redirect && <Navigate replace to="/drawings" />}
    </div>
  );
}

export default App;
