import React from 'react';
import '../assets/style/logIn.css';
import { Button } from 'react-bootstrap'
function Register() {
    return <div className='logInWrapp'>    
                <h3>Register in the MyGallery</h3>
                <form className='formLogIn'>  
                    <input placeholder='Введите ваш логин'/>
                    <input placeholder='Введите ваш пароль'/>
                    <input placeholder='Повторите ваш пароль'/>
                    <Button className="btn btn-secondary">Register</Button>
                </form>
            </div>
}
export default Register
