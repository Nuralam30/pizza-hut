import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaById, updatePizza } from '../components/redux/actions/pizzaActions';
import { Button, Container, Form } from 'react-bootstrap';
import Loader from '../components/Loader/Loader';
import Error from '../components/Loader/Error';
import Success from '../components/Loader/Success';

const EditPizza = () => {

    const { pizzaId } = useParams();
    const dispatch = useDispatch();

    const pizzaState = useSelector(state => state.getPizzaByIdReducer);
    const {pizza, error, loading} = pizzaState;

    const updatedPizzaState = useSelector(state => state.updatePizzaReducer);
    const {updateLoading, updateSuccess} = updatedPizzaState;

    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState();
    const [mediumPrice, setMediumPrice] = useState();
    const [largePrice, setLargePrice] = useState();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() => {
        if(pizza){
            if(pizza._id === pizzaId){
                setName(pizza.name)
                setSmallPrice(pizza.prices[0]['small'])
                setMediumPrice(pizza.prices[0]['medium'])
                setLargePrice(pizza.prices[0]['large'])
                setCategory(pizza.category)
                setDescription(pizza.description)
                setImageUrl(pizza.image)
            }
            else{
                dispatch(getPizzaById(pizzaId))
            }
        }
        else{
            dispatch(getPizzaById(pizzaId))
        }
    }, [pizza, dispatch])

    const handleFormSubmit = () => {
        const updatedPizza = {
            _id: pizzaId,
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
        dispatch(updatePizza(updatedPizza))
    }

    return (
        <div>
            <h4>Edit Pizza</h4>

            <Container>
                
                {loading && <Loader></Loader>}
                {error && <Error error='Something went wrong'></Error>}

                {updateLoading && <Loader></Loader>}
                {updateSuccess && <Success success='Pizza updated successfully'></Success>}

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
                        <Button size='sm' variant='success' onClick={handleFormSubmit}>Save</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default EditPizza;