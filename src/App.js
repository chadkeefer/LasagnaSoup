import logo from './lasagnaSoupLogo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LasagnaSoupTheme.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

function App() {

  //check if current url is "lasagnasoup.com"
  //if so, we will redirect to homepage by default
  const location = useLocation();
  console.log(location.pathname);
  var redirect = false;
  if (location.pathname === "/")
    redirect = true

  return (
    <div>

      {/* website logo */}
      <div className='yellowSection'>
        <Container>
          <LinkContainer to="/home" style={{ cursor: "pointer" }}>
            <img src={logo} alt="logo" id="headerImage"></img>
          </LinkContainer>
        </Container>
      </div>

      {/* website navbar */}
      <Navbar id="headerNav" collapseOnSelect expand="sm" bg="warning" variant="light" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto handWritten" defaultActiveKey={location.pathname}>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/drawings/">Drawings</Nav.Link>
              <Nav.Link href="/comics/">Comics</Nav.Link>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      {/* redirect to homepage by default */}
      {redirect && <Navigate replace to="/home" />}

      {/* website footer */}
      <div className='yellowSection' style={{ padding: '0px 15px 0px 15px' }}>
        <Container className="handWritten" style={{ display: "inline", textAlign: "center" }}>
          <p style={{ paddingTop: "15px" }}>Lasagnasoup.com created and maintained by Chad Keefer / All images property of Chad Keefer</p>
          <p> Instagram: <a href="https://www.instagram.com/chadkeefer_/" style={{ textDecoration: "none" }}>@chadkeefer_</a> </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
