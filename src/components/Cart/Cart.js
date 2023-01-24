import React from 'react';
import './Cart.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../redux/actions/cartActions';

const Cart = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();

    const addtocart = (item, quantity, varient) => {
        dispatch(addToCart(item, quantity, varient))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='8' xs>
                        <h1 className='cart-heading mb-4'>My Cart</h1>
                        {
                            cartItems.map(item => <div className='cart-item d-flex justify-content-between align-items-center' key={item._id}>
                                <div className="item-info">
                                    <h5>{item.name} [{item.varient}]</h5>
                                    <p>price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</p>
                                    <p>Quantity : 
                                        <span className='increment' onClick={() => addtocart(item, item.quantity+1, item.varient)}> + </span> 
                                        {item.quantity} 
                                        <span className='decrement' onClick={() => addtocart(item, item.quantity-1, item.varient)}> - </span>
                                    </p>
                                </div>
                                <div className="item-image">
                                    <img src={item.image} alt="this is product" />
                                    <Button className='remove-btn' size='sm' onClick={() => dispatch(removeFromCart(item))}> X </Button>
                                </div>
                            </div>)
                        }
                    </Col>
                    <Col lg='4' xs>
                        <h1>Subtotal </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;