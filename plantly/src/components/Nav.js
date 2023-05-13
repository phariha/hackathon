import React from 'react'; //import React Component
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import { getAuth, signOut } from 'firebase/auth';

export function SignIn() {
    return (
        <Button variant="light" aria-label="sign in" href='/SignIn'>Sign In</Button>
    );
}

export function PlantNav(props) {

    return (
        <>
            <Navbar className="color-Nav" variant="dark" expand="lg">
                <Navbar.Brand href="/">Sustanify</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link aria-label="Quiz Page" as={Link} to='/Quiz'>Why Me</Nav.Link>
                        <NavDropdown title="Take Action" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">Recycle</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Explore">Explore</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Transportation</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} aria-label="About Page" to='/About'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    );
}