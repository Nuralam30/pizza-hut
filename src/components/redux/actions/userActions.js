
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


export const userLogin = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST'})

    try {
        const response = await axios.post('/api/users/login', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error})
    }
}

export const userLogout = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
}


export const getAllUsers = () => async dispatch => {

    dispatch({type: 'GET_USERS_REQUEST'})

    try {
        const response = await axios.get('/api/users/getAllUsers');
        dispatch({type: 'GET_USERS_SUCCESS', payload: response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_USERS_FAILED', payload: error})
    }
}


export const deleteUser = (userId) => async dispatch => {

    try {
        const response = await axios.post('/api/users/deleteUser', {userId});
        alert('User Deleted Successfully')
        console.log(response)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}