import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import logo from '../Imagenes/logo2.png';
import '../hojas-de-estilo/BarraSuperior.css';

const BarraSuperior = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nombre-software">
            BugFixer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/como-funciona">
                ¿Cómo funciona?
              </Nav.Link>
            </Nav>

            <Nav className="Barra-usuario">
              <Image src={logo} alt="Logo" roundedCircle className="logo" />
              <NavDropdown title={"Jose Toledo"} id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/historial-cuenta">
                  Historial cuenta
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/ajustes">
                  Ajustes
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/salir-cuenta">
                  Salir cuenta
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/acerca-de-nosotros">
                  Acerca de nosotros
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraSuperior;