import React from 'react'; //import React Component
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export function PlantNav(props) {
  return (
    <>
      <Navbar className="color-Nav" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="font-nav">Sustainify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"> {/* Add the ml-auto class */}
            <Nav.Link aria-label="WhyMe Page" as={Link} to="/WhyMe">
              Why Me
            </Nav.Link>
            <NavDropdown title="Take Action" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Recycle">Recycle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Explore">
                Explore
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Transportation">
                Transportation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} aria-label="About Page" to="/About">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
          .ml-auto {
            margin-left: auto;
          }
        `}</style>
    </>
  );
}
