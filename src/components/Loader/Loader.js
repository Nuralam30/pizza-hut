import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {

    const loaderStyle = {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={loaderStyle}>
            <Spinner animation="border" variant="primary" style={{width: '100px', height: '100px'}} />
        </div>
    );
};

export default Loader;