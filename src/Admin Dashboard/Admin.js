import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import './Admin.css';
import OrderList from './OrderList';
import AddPizza from './AddPizza';
import PizzasList from './PizzasList';
import Users from './Users';
import EditPizza from './EditPizza';

const Admin = () => {
    const userState = useSelector(state => state.userLoginReducer);
    const { currentUser } = userState;

    useEffect(() => {
        if(!currentUser.isAdmin){
            window.location.href = '/'
        }
    }, [currentUser])

    
    return (
        <div>
            <Container>
                <h1 className='mb-4'>Admin Panel</h1>

                <div className="admin-navlist mb-4 d-flex flex-wrap justify-content-center">
                    <Link to='users-list' className='admin-nav-item'> Users List</Link>
                    <Link to='/admin/pizzas-list' className='admin-nav-item'> Pizzas List</Link>
                    <Link to='/admin/add-pizza' className='admin-nav-item'> Add New Pizza</Link>
                    <Link to='/admin/orders-list' className='admin-nav-item'> Order List</Link>

                </div>
            </Container>


            <Routes>
                <Route path='users-list' element={<Users></Users>}></Route>
                <Route path='pizzas-list' element={<PizzasList></PizzasList>}></Route>
                <Route path='add-pizza' element={<AddPizza></AddPizza>}></Route>
                <Route path='orders-list' element={<OrderList></OrderList>}></Route>
                <Route path='edit-pizza/:pizzaId' element={<EditPizza></EditPizza>}></Route>
                <Route path='' element={<Users></Users>}></Route>
            </Routes>
        </div>
    );
};

export default Admin;