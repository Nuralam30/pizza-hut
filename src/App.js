import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/Navbar/NavMenu';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Home></Home>
    </div>
  );
}

export default App;
