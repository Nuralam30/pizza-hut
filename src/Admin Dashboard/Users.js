import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Loader/Error';
import Loader from '../components/Loader/Loader';
import { deleteUser, getAllUsers } from '../components/redux/actions/userActions';

const Users = () => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.getAllUsersReducer);

    const { loading, error, users } = usersState;

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <Container>
                <h4>Users List</h4>

                {loading && <Loader></Loader>}
                {error && <Error error='Something went wrong'></Error>}

                <Table striped bordered responsive hover className='pizzas-list'>
                    <thead>
                        <tr className='bg-primary color-white'>
                            <th>#</th>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Trash color='red' onClick={() => dispatch(deleteUser(user._id))} /></td>
                                
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Users;