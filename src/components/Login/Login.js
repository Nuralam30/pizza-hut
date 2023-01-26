import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import Loader from '../Loader/Loader';
import Error from '../Loader/Error';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginState = useSelector(state => state.userLoginReducer);

    const { loading, error } = loginState;

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])

    const login = () => {
        const user = {
            email,
            password
        }
        dispatch(userLogin(user))
    }

    return (
        <div>
            <Container>
                <Row className='login'>
                    <Col lg='4' md='4' xs>
                        <div className='shadow-lg p-4 mb-5 bg-white rounded'>
                            <h2 className='mb-3'>Login</h2>

                            {loading && (<Loader></Loader>)}
                            {error && (<Error error='Invalid email or password'></Error>)}

                            <Form className='login-form'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="danger" onClick={login}>
                                    LOGIN
                                </Button>
                                <div className='mt-4 text-center'>
                                    <Link to='/register'>Click here to register</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;