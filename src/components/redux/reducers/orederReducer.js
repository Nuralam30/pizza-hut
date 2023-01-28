
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