import React, { useState } from 'react';
import './Register.css';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');

    const dispatch = useDispatch();

    const register = () => {
        if(password !== cPassword){
            alert('password are not matched')
        }
        else{
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
                <div  className='register'>
                    <Form className='register-form'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control 
                            type="text" 
                            placeholder="Enter name" 
                            onChange={(e) =>setName(e.target.value)}
                            value={name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={(e) =>setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            onChange={(e) =>setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control 
                            type="password" 
                            placeholder="Confirm Password" 
                            onChange={(e) =>setcPassword(e.target.value)}
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
            </Container>
        </div>
    );
};

export default Register;