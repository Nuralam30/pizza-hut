import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/Navbar/NavMenu';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders';
import Admin from './Admin Dashboard/Admin';

function App() {
 
  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/admin/*' element={<Admin></Admin>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
