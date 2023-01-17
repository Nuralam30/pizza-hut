import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMenu = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" className='shadow-lg p-3 mb-5 bg-white rounded'>
                <Container>
                <Navbar.Brand href="#home">Pizza Hut</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;