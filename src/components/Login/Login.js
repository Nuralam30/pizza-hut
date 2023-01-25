import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect( () => {
        if(localStorage.getItem('currentUser')){
            window.location.href = '/'
        }
    }, [])

    const login = () => {
        const user = {
            email,
            password
        }
        console.log(user)
        dispatch(userLogin(user))
    }

    return (
        <div>
            <Container>
                <div  className='login'>
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
            </Container>
        </div>
    );
};

export default Login;