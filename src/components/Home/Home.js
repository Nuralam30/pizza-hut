import React, {useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import Pizza from '../Pizza/Pizza';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPizzas } from '../redux/actions/pizzaActions';
import Loader from '../Loader/Loader';
import Error from '../Loader/Error';

const Home = () => {

    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducer);
    const { loading, pizzas, error } = pizzasState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch])

    
    return (
        <div className='home'>
            <Container>
                <Row>
                    {
                        loading ? (<Loader></Loader>) : error ? (<Error></Error>) : 
                        pizzas.map(pi => <Pizza pizza = {pi} key={pi._id}></Pizza>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;