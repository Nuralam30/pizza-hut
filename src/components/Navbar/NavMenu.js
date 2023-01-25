import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const NavMenu = () => {
    const cartState = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.userLoginReducer);
    const { currentUser } = userState;

    const [dropdown, serDropdown] = useState(false)

    return (
        <div>
            <Navbar bg="light" variant="light" className='shadow-lg p-3 mb-5 bg-white rounded'>
                <Container>
                <Navbar.Brand href="/">Pizza Hut</Navbar.Brand>
                <Nav className="ml-auto">
                    {
                        currentUser ? <Nav.Link onClick={() => serDropdown( !dropdown)}>{currentUser.name}</Nav.Link> : 
                        <Nav.Link href="/login">Login</Nav.Link>
                    }
                    <Nav.Link href="/cart">Cart {cartState.cartItems.length}</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;