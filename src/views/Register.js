import React from 'react'

function Register() {
    return <div className='wrapper'>    
            <h3>Register in the MyGallery</h3>
            <form className='form'>  
                <input placeholder='Введите ваш логин'/>
                <input placeholder='Введите ваш пароль'/>
                <input placeholder='Подтвердите ваш пароль'/>
                <input type='checkbox' id='rememberMe' />
                
            </form>
    </div>
}
export default Register
