import React, { useEffect } from 'react';
import './Orders.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/orderActions';
import Loader from '../Loader/Loader';
import Error from '../Loader/Error';

const Orders = () => {

    const dispatch = useDispatch();
    const ordersState = useSelector(state => state.getUserOrdersReducer);

    const { orders, loading, error } = ordersState;

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (
        <div>
            <Container>
                <h1 className='mb-3'>My Orders</h1>
                <div className="orders">

                    {loading && <Loader></Loader>}
                    {error && <Error error='Something went wrong'></Error>}

                    {orders &&
                        orders.map(order =>
                            <Row key={order._id} className='order d-flex justify-content-center'>
                                <Col xs lg='3' md='4'>
                                    <h5>Items {order.orderAmount}</h5>
                                    {
                                        order.orderItems.map(item => <p key={item._id}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>)
                                    }
                                </Col>
                                <Col xs lg='3' md='4'>
                                    <h5>Address</h5>
                                    <p>{order.shippingAddress.street}</p>
                                    <p>{order.shippingAddress.city}</p>
                                    <p>{order.shippingAddress.country}</p>
                                </Col>
                                <Col xs lg='3' md='4'>
                                    <h5>Order Info</h5>
                                    <p>Transaction Id : {order.transactionId}</p>
                                    <p>Total Amount : {order.orderAmount}</p>
                                    <p>Order Status : {}</p>
                                    <p>Order Date : {order.createdAt.substring(0,10)}</p>
                                </Col>
                            </Row>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Orders;