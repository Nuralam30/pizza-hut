import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../components/redux/actions/userActions';

const Users = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <Container>
                <h4>Users List</h4>
            </Container>
        </div>
    );
};

export default Users;