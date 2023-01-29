import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Loader/Error';
import Loader from '../components/Loader/Loader';
import { addPizza } from '../components/redux/actions/pizzaActions';
import Success from './../components/Loader/Success';

const AddPizza = () => {

    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState();
    const [mediumPrice, setMediumPrice] = useState();
    const [largePrice, setLargePrice] = useState();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();
    const addPizzaState = useSelector(state => state.addPizzaReducer);

    const { success, error, loading } = addPizzaState;

    const handleFormSubmit = () => {
        const pizza = {
            name,
            image: imageUrl,
            description,
            category,
            prices : {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        dispatch(addPizza(pizza))
    }

    return (
        <div>
            <Container>
                
                {loading && <Loader></Loader>}
                {error && <Error error='Something went wrong'></Error>}
                {success && <Success success='New pizza added successfully'></Success>}

                <div className="add-pizza w-100 d-flex justify-content-center">
                    <Form className='addpizza-form w-100 shadow-lg p-4 mb-5 bg-white rounded'>
                        <Form.Control
                            type="text"
                            placeholder="Enter pizza name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="small variant price"
                            value={smallPrice}
                            onChange={(e) => setSmallPrice(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="medium variant price"
                            value={mediumPrice}
                            onChange={(e) => setMediumPrice(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="large variant price"
                            value={largePrice}
                            onChange={(e) => setLargePrice(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="image url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <Button size='sm' variant='success' onClick={handleFormSubmit}>Add Pizza</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default AddPizza;