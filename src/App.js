import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style/main.css'
import React from 'react';
import LogIn  from './views/LogIn';
import  Register   from './views/Register';
import  Home  from './views/Home';
import Header from './components/Header';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './routes/privateRoute';

function App() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

  // const handleLogin = () => {
  //   localStorage.setItem('isLoggedIn', true);
  //   setIsLoggedIn(true);
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // }
    return (
      <div className='wrapper'> 
      <Router>
        <Header/>
         <Routes>  
              <Route element={<PrivateRoute/>}> 
                  <Route exact path='/home' element={<Home/>}/>
              </Route>
              <Route path='/logIn' element={<LogIn/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
        </Router> 
      </div>
    );
}

export default App;
