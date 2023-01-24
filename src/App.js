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

function App() {
 
  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
