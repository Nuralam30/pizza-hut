import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <h1> this is login</h1>
            <Link to='/register'>Click here to register</Link>
        </div>
    );
};

export default Login;