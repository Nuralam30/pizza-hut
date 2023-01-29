
import axios from 'axios';
export const getAllPizzas = () => async dispatch => {

    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzas/getAllPizzas');
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}


export const filterPizzas = (searchKey, category) => async dispatch => {

    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzas/getAllPizzas');
        var filteredPizzas;
        filteredPizzas = response.data.filter(item => item.name.toLowerCase().includes(searchKey));

        if(category !== 'all') {
            filteredPizzas = response.data.filter(item => item.category.toLowerCase() === category);
        }
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: filteredPizzas})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}


export const addPizza = (pizza) => async dispatch => {

    dispatch({type: 'ADD_PIZZA_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/addPizza', {pizza});
        console.log(response)
        dispatch({type: 'ADD_PIZZA_SUCCESS'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'ADD_PIZZA_FAILED', payload: error})
    }
}


export const getPizzaById = (pizzaId) => async dispatch => {

    dispatch({type: 'GET_PIZZA_BY_ID_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/getPizzaById', {pizzaId});
        dispatch({type: 'GET_PIZZA_BY_ID_SUCCESS', payload: response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_PIZZA_BY_ID_FAILED', payload: error})
    }
}


export const updatePizza = (updatedPizza) => async dispatch => {

    dispatch({type: 'UPDATE_PIZZA_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/updatePizza', {updatedPizza});
        console.log(response)
        dispatch({type: 'UPDATE_PIZZA_SUCCESS'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'UPDATE_PIZZA_FAILED', payload: error})
    }
}