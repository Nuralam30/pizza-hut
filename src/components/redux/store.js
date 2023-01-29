
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { addPizzaReducer, getAllPizzasReducer } from './reducers/pizzaReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { getUserOrdersReducer, placeOrderReducer } from './reducers/orederReducer';

const finalReducers = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    userRegisterReducer: userRegisterReducer,
    userLoginReducer: userLoginReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addPizzaReducer: addPizzaReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    cartReducer : {
        cartItems: cartItems
    },
    userLoginReducer : {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;