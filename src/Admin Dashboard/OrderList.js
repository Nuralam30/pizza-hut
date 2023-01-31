import React, { useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from './../components/redux/actions/orderActions';
import Error from '../components/Loader/Error';
import Loader from '../components/Loader/Loader';

const OrderList = () => {

    const dispatch = useDispatch()
    const ordersState = useSelector(state => state.getAllOrdersReducer)

    const { loading, error, orders } = ordersState;

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

    return (
        <div>
            <Container>
                <h4>Orders List</h4>
                {loading && <Loader></Loader>}
                {error && <Error error='Something went wrong'></Error>}

                <Table striped bordered responsive hover className='pizzas-list'>
                    <thead>
                        <tr className='bg-primary color-white'>
                            <th>#</th>
                            <th>Order Id</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((order, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.userId}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>
                                    {order.isDelivered ? (<h6>Delivered</h6>) :
                                        (<Button 
                                            size='sm' 
                                            variant='info' 
                                            onClick={() => dispatch(deliverOrder(order._id))}>
                                                Deliver
                                        </Button>)
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default OrderList;