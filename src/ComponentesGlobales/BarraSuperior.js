import { Container, Nav, Navbar, NavDropdown,Stack} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { RiAccountPinCircleLine   } from "react-icons/ri";

import '../EstilosGlovales/BarraSuperior.css';


const BarraSuperior = ({nombre}) => {
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

            <Stack direction='horizontal' gap={5}>
            <Nav className="Barra-usuario">
              <RiAccountPinCircleLine size={38} color="#F2F2F2" />
              <NavDropdown title={nombre} id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/Cuenta">
                  Cuenta
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
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraSuperior;