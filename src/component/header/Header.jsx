import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" expand='lg' className="mb-3 px-lg-3" variant='dark'>
          <Container fluid>
          <Navbar.Brand href="#">Ponpes Alam Terpadu Al-Muhajirin</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Beranda</Nav.Link>
              <NavDropdown
              title="Profil"
              id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3" bg="dark">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/prestasi">Prestasi</Nav.Link>
              <Nav.Link href="/ppdb">PPDB</Nav.Link>
              <Nav.Link href="/galeri">Galeri Al-Muhajirin</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </>
  );
}

export default Headers;