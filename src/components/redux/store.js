
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import { userRegisterReducer } from './reducers/userReducer';

const finalReducers = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    userRegisterReducer: userRegisterReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const initialState = {
    cartReducer : {
        cartItems: cartItems
    }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;