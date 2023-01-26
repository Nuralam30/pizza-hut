import React, { useState } from 'react';
import './Register.css';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import Loader from '../Loader/Loader';
import Success from '../Loader/Success';
import Error from '../Loader/Error';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');
    const registerState = useSelector(state => state.userRegisterReducer);

    const { loading, success, error } = registerState;

    const dispatch = useDispatch();

    const register = () => {
        if (password !== cPassword) {
            alert('password are not matched')
        }
        else {
            const user = {
                name,
                email,
                password
            }
            dispatch(userRegister(user))
        }
    }

    return (
        <div>
            <Container>
                <Row className='register'>
                    <Col lg='4' md='4' xs>
                        <div className='shadow-lg p-4 mb-5 bg-white rounded'>

                            <h2 className='mb-3'>Register</h2>

                            {loading && (<Loader></Loader>)}
                            {success && (<Success success='User registered successfully'></Success>)}
                            {error && (<Error error='Email already exist'></Error>)}
                            
                            <Form className='register-form'>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
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
                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) => setcPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="danger" onClick={register}>
                                    REGISTER
                                </Button>
                                <div className='mt-4 text-center'>
                                    <Link to='/login'> Login here</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;