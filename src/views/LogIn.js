import { Button } from 'react-bootstrap';
import React from 'react';
import '../assets/style/logIn.css';
import { useForm } from 'react-hook-form';
import Auth from '../components/Auth';

function LogIn() {
    function submitHandler(data) {
        console.log(data);
    }

    return <Auth isLogin={true} submitHandler={submitHandler} />
}
export default LogIn
    