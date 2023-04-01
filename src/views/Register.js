import React from 'react';
import '../assets/style/logIn.css';
import { Button } from 'react-bootstrap'
import Auth from '../components/Auth';

function Register() {

    function submitHandler(data) {
        console.log(data);
        // fetch('http://localhost:8080/api/auth/sign-up') пост запрос
    }

    return <Auth isLogin={false} submitHandler={submitHandler}/>
}
export default Register
