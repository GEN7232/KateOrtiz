import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function ColorSchemesExample() {
  return (
    <>
      <Navbar className='width' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Kate Ortiz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Music" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown" href="/singles">Singles</NavDropdown.Item>
              <NavDropdown.Item className="dropdown" href="/podcasts">
                  Podcasts
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown" href="/mini-songs">Mini Songs</NavDropdown.Item>
              <NavDropdown.Item className="dropdown" href="/videos">Videos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;