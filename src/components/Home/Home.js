import React, {useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import pizzas from './../pizzasdata';
import { Row } from 'react-bootstrap';
import Pizza from '../Pizza/Pizza';
import {useDispatch} from 'react-redux';
import { getAllPizzas } from '../redux/actions/pizzaActions';

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    
    return (
        <div className='home'>
            <Container>
                <Row>
                    {
                        pizzas.map(pi => <Pizza pizza = {pi}></Pizza>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;