import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
            <Container>
                <Navbar className=""  expand="lg">
                <Container fluid>
                <Navbar.Brand className='text-dark fs-3' as={NavLink} to='/home'><span className="text-primary">Cosgrove</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 "style={{ maxHeight: '100px' }}navbarScroll>
                        <Nav.Link className="text-dark" as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark" as={NavLink} to="/services">Services</Nav.Link>
                        <Nav.Link className="text-dark" as={NavLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="text-dark" as={NavLink} to="/about">About us</Nav.Link>
                    </Nav>
                    {
                        user.email && <p className="ms-auto me-3 my-auto">Welcome, {user.displayName}</p>
                    }
                    {
                        user.email?
                        
                        <Button onClick={logOut} className="px-3 py-2 btn-primary me-2">Logout</Button>
                        :
                        <NavLink to="/login"><Button className="px-3 py-2 btn-primary me-2">Login</Button></NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </Container>
    );
};

export default Header;