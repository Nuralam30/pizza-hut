
export const placeOrderReducer = (state={}, action) => {

    switch(action.type) {
        case 'ORDER_PLACE_REQUEST' : 
            return {
                loading: true
            }
        case 'ORDER_PLACE_SUCCESS' : 
            return {
                loading: false,
                success: true
            }
        case 'ORDER_PLACE_FAILED' : 
            return {
                loading: false,
                error: action.payload
            }
        default : 
            return state;
    }
}


export const getUserOrdersReducer = (state = {orders: []}, action) => {

    switch(action.type) {
        case 'GET_USER_ORDERS_REQUEST': 
            return {
                loading: true,
                ...state
            }
        case 'GET_USER_ORDERS_SUCCESS':
            return {
                loading: false,
                orders: action.payload
            }
        case 'GET_USER_ORDERS_FAILED': 
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
