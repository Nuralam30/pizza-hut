
import axios from 'axios';
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {


    dispatch({type: 'ORDER_PLACE_REQUEST'});
    const currentUser = getState().userLoginReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;

    try {
        const response = await axios.post('/api/orders/placeOrder', {token, subtotal, currentUser, cartItems });
        console.log(response)
        dispatch({type: 'ORDER_PLACE_SUCCESS'})
    } catch (error) {
        dispatch({type: 'ORDER_PLACE_FAILED'})
        console.log(error)
    }
}