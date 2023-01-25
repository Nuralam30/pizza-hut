
import axios from 'axios';
export const userRegister = (user) => async dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST'})

    try {
        const response = await axios.post('/api/users/register', user);
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}