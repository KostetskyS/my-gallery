import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style/main.css'
import React from 'react';
import LogIn  from './views/LogIn';
import  Register   from './views/Register';
import Header from './components/Header';
import About from './views/About';
import Contacts from './views/Contacts';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/privateRoute';
import UnAuthRoute from './routes/unAuthRoute';
import { Photos } from './views/Photos';
import { Albums } from './views/Albums';

function App() {

    return (
      <div className='wrapper'> 
      <Router>
        <Header/>
         <Routes>  
              <Route element={<PrivateRoute/>}> 
                <Route exact path='/albums' element={<Albums/>}/>
                <Route exact path='/photos' element={<Photos/>}/>
              </Route>
              <Route element={<UnAuthRoute/>}> 
                <Route path='/logIn' element={<LogIn/>}/>
                <Route path='/register' element={<Register/>}/>
              </Route>
              <Route path='/about' element={<About/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </Router> 
      </div>

    );
}

export default App;
