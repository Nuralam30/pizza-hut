import React, { useState } from 'react';
import './Pizza.css';
import { Button, Col, Form, Modal } from 'react-bootstrap';

const Pizza = (props) => {
    const { name, image, varients, prices, description } = props.pizza;
    const [ varient, setVarient ] = useState('small');
    const [ quantity, setQuantity ] = useState(1);
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col xs={12} md='6' lg='4'>
            <div className='pizza-item'>
                <div className="modal-control" onClick={handleShow}>
                    <h5>{name}</h5>
                    <img src={image} alt="item pizza" />
                </div>

                <div className="varient-quantity d-flex justify-content-between">
                    <div className="varients w-100">
                        <h6>Varients</h6>
                        <Form.Select aria-label="Default select example" value={varient} onChange={ (e) => setVarient(e.target.value)}>
                            {
                                varients.map(va => <option value={va}> {va}</option>)
                            }
                        </Form.Select>
                    </div>
                    <div className="quantity w-100">
                        <h6>Quantity</h6>
                        <Form.Select aria-label="Default select example" value={quantity} onChange={ (e) => setQuantity(e.target.value)}>
                            {
                                [...Array(10).keys()].map((x, i) => <option value={i+1}> {i+1}</option>)
                            }
                        </Form.Select>
                    </div>
                </div>

                <div className="price-addToCart d-flex justify-content-between">
                    <h6>Price: {prices[0][varient] * quantity} BDT/-</h6>
                    <Button size='sm'>ADD TO CART</Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className='pizza-modal d-flex justify-content-center'>
                <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} alt="modal demo" />
                    <p className="description mt-3">{description}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
};

export default Pizza;