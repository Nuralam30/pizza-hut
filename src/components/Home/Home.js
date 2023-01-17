import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import pizzas from './../pizzasdata';
import { Row } from 'react-bootstrap';
import Pizza from '../Pizza/Pizza';

const Home = () => {
    
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