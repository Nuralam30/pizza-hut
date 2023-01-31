import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import Error from '../components/Loader/Error';
import Loader from '../components/Loader/Loader';
import { deletePizza, getAllPizzas } from './../components/redux/actions/pizzaActions';
import { useNavigate } from 'react-router-dom';

const PizzasList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pizzasState = useSelector(state => state.getAllPizzasReducer);
    const { loading, pizzas, error } = pizzasState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch])


    return (
        <div>
            <Container>
                {loading && <Loader></Loader>}
                {error && <Error error='Something went wrong'></Error>}

                <Table striped bordered responsive hover className='pizzas-list'>
                    <thead>
                        <tr className='bg-primary color-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Prices</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pizzas && pizzas.map((pizza, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{pizza.name}</td>
                                <td>
                                    Small : {pizza.prices[0]['small']} <br />
                                    Medium : {pizza.prices[0]['medium']} <br />
                                    Large : {pizza.prices[0]['large']}
                                </td>
                                <td>{pizza.category}</td>
                                <td>
                                    <Trash color='red' className='trash-btn' onClick={() => dispatch(deletePizza(pizza._id))} />
                                    <PencilSquare color='green' className='edit-btn' onClick={() =>navigate(`/admin/edit-pizza/${pizza._id}`)} />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default PizzasList;