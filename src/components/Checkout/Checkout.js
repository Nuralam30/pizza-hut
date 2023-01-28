
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/actions/orderActions';
import Loader from './../Loader/Loader';
import Success from './../Loader/Success';
import Error from './../Loader/Error';

const Checkout = ({subtotal}) => {

    const dispatch = useDispatch();
    const orderState = useSelector(state => state.placeOrderReducer)

    const {loading, success, error} = orderState;

    const tokenHandler = (token) => {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>
            {loading && <Loader></Loader>}
            {success && <Success success='Order placed successfully'></Success>}
            {error && <Error error='Something went wrong'></Error>}

            <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
            token={tokenHandler}
            currency='INR'
            stripeKey='pk_test_51MUSoJHuOiMO6vKskxnOsZ5qDhap5LU6nvEX1jlDrmHLBTyHHapwr3rLrXvcpC440sDwZ4l3lljqiRAHLCBmf9G200oZdpcieI'
            >
                <Button size='sm' variant='danger'>Pay Now</Button>
            </StripeCheckout>
        </div>
    );
};

export default Checkout;