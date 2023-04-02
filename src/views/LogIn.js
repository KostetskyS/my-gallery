import { Button } from 'react-bootstrap';
import React from 'react';
import '../assets/style/logIn.css';
import { useForm } from 'react-hook-form';
import Auth from '../components/Auth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();
    
    async function submitHandler(data) {
        const response = await axios.post('http://localhost:8080/api/auth/login', data)
            .then(async function (response) {
                console.log(response.data, "data")
                if(response.data.success) {
                    navigate('/');
                }
            }).catch(function(error){
                console.log(error)
            })
    }
    return <Auth isLogin={true} submitHandler={submitHandler} />
}
export default LogIn
    