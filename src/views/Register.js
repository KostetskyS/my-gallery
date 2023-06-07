import React from 'react';
import '../assets/style/logIn.css';
import Auth from '../components/Auth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

function Register() {
    const navigate = useNavigate();

    async function submitHandler(data) {
        if(data.password === data.password2) {
            await axios.post('http://localhost:8080/api/auth/sign-up', data)
            .then(async function (response) {
                
                console.log(response.data, "data")
                if(response.data.success) {
                    navigate('/logIn');
                } else {
                    Toastify({
                        text: "User already registered",
                        offset: {
                          x: 50, 
                          y: 10
                        },
                      }).showToast();
                }
            }).catch(function(error){
                console.log(error)
            })
        } else {
            alert('Password mismatch')
        }      
    }

    return <div>    
        <Auth isLogin={false} submitHandler={submitHandler}/>  
    </div> 
}

export default Register
