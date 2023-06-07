import React from 'react';
import '../assets/style/logIn.css';
import Auth from '../components/Auth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

function LogIn() {
    const navigate = useNavigate();
    
    async function submitHandler(data) {
        await axios.post('http://localhost:8080/api/auth/login', data)
            .then(async function (response) {
                console.log(response.data, "data");
                if(response.data.success) {
                    navigate('/');
                    localStorage.setItem('authToken', response.data.data.token);
                } else {
                    Toastify({
                        text: "User not found",
                        offset: {
                          x: 50, 
                          y: 10
                        },
                      }).showToast();
                }
            }).catch(function(error){
                Toastify({
                    text: "User not found",
                    offset: {
                      x: 50, 
                      y: 10
                    },
                  }).showToast();
            })
            
    }
    return <Auth isLogin={true} submitHandler={submitHandler} />
}
export default LogIn
    

