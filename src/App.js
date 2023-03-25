import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style/main.css'
import React from 'react';
import LogIn  from './views/LogIn';
import  Register   from './views/Register';
import  Home  from './views/Home';
import Header from './components/Header';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'> 
    <Router>
      <Header/>
       <Routes>  
            <Route exact path='/' element={<Home/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
