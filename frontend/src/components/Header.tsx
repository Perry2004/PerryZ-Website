import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar fixed="top" className="d-none d-sm-block" id="nav-bar">
        <Container className="fs-3">
          <Navbar.Brand id="nav-name">Perry Zhu</Navbar.Brand>

          <Nav variant="pills">
            <Nav.Link href="#front-page">Home</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
