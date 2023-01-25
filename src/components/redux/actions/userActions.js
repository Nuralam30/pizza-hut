
import axios from 'axios';
export const userRegister = (user) => dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST'})

    try {
        const response = axios.get('/api/users/register');
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}