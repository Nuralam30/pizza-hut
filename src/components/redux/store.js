
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const finalReducers = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer
})


const initialState = {}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;