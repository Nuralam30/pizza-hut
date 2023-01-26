import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/userActions';

const NavMenu = () => {
    const cartState = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.userLoginReducer);
    const { currentUser } = userState;
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar bg="light" variant="light" className='shadow-lg p-3 mb-5 bg-white rounded'>
                <Container>
                    <Navbar.Brand href="/">Pizza Hut</Navbar.Brand>
                    <Nav className="ml-auto">
                        {
                            currentUser ? <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Orders
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => dispatch(userLogout())}>LogOut</NavDropdown.Item>
                            </NavDropdown> :
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