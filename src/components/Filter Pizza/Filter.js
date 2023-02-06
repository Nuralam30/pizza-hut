import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Filter.css';
import { useDispatch } from 'react-redux';
import { filterPizzas } from '../redux/actions/pizzaActions';

const Filter = () => {

    const [searchKey, setSearchKey] = useState('');
    const [category, setCategory] = useState('all');
    const dispatch = useDispatch();

    return (
        <div className='filter mb-4'>
            <Row className='d-flex justify-content-center'>
                <Col lg='4' md='2' xs>
                    <Form.Control 
                    className='w-100' 
                    type="email" 
                    placeholder="Search Pizza"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
                     />
                </Col>
                <Col lg='2' md='2' xs>
                    <Form.Select 
                    aria-label="Default select example" 
                    className='w-100' 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non Veg</option>
                    </Form.Select>
                </Col>
                <Col lg='2' md='2' xs>
                    <Button variant='danger' className='w-100' onClick={()=> dispatch(filterPizzas(searchKey, category))}>Filter</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Filter;