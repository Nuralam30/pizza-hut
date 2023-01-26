
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';

const Checkout = ({subtotal}) => {

    const tokenHandler = (token) => {
        console.log(token)
    }

    return (
        <div>
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