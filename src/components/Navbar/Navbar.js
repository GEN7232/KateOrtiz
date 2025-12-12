import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expanded={expanded} 
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
      expand="sm"
      id="navColor"
      variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Kate Ortiz
          </Navbar.Brand>

        {/* Toggle button with conditional icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {expanded ? (
            <span style={{ fontSize: "1.5rem" }}>✕</span> // X icon
          ) : (
            <span style={{ fontSize: "1.5rem" }}>☰</span> // Hamburger icon
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>

              <NavDropdown title="Music" id="basic-nav-dropdown">

                <NavDropdown.Item as={NavLink} to="/singles">
                  Singles
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/commissions">
                  Commissions
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/mini-songs">
                  Mini Songs
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/videos">
                  Videos
                </NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
