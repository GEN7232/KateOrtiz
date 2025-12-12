import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" id="navColor" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Kate Ortiz
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
