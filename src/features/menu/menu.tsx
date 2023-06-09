import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Star Wars Story Ai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/characters">Characters</Nav.Link>
            <Nav.Link  href="/settings">Settings</Nav.Link>
            <Nav.Link  href="/starships">Starships</Nav.Link>
            <Nav.Link  href="/plot">Plot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
