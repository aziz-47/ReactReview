import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "./img/logo-4.png";
//! Local resimleri gosterebilmek icin import yontemiyle elklemek gerekiyor. Akdi halde resimler gozukmuyor.

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Dersler</Nav.Link>
              <NavDropdown title="Kurslar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Web Dev</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">JavaDev</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">DevOps</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
