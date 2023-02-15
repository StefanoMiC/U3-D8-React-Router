// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNav = ({ claim }) => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <strong>Pasta Restaurant</strong> - {claim}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className={`nav-link ${location.pathname === "/menu" ? "active" : ""}`} to="/menu">
              Menu
            </Link>
            <Link className={`nav-link ${location.pathname === "/reservations" ? "active" : ""}`} to="/reservations">
              Prenotazioni
            </Link>
            <Link className={`nav-link ${location.pathname === "/book-table" ? "active" : ""}`} to="/book-table">
              Prenota un tavolo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
