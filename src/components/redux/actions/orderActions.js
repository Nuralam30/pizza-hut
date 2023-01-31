
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


export const getUserOrders = () => async (dispatch, getState) => {

    dispatch({type: 'GET_USER_ORDERS_REQUEST'})

    try {
        const currentUser = getState().userLoginReducer.currentUser;
        const response = await axios.post('/api/orders/getuserorders', {userId: currentUser._id});
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload: response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload: error})
    }
}


export const getAllOrders = () => async (dispatch) => {

    dispatch({type: 'GET_ALL_ORDERS_REQUEST'})

    try {
        const response = await axios.get('/api/orders/getallorders');
        dispatch({type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_ALL_ORDERS_FAILED', payload: error})
    }
}


export const deliverOrder = (orderId) => async dispatch => {

    try {
        const response = await axios.post('/api/orders/deliverorder', {orderId})
        console.log(response)
        alert('Order deliverd successfully')
        const orders = await axios.get('/api/orders/getallorders');
        dispatch({type: 'GET_ALL_ORDERS_SUCCESS', payload: orders.data})
    } catch (error) {
        console.log(error)
    }
}
