import React from 'react'

function LogIn() {
    return <div className='wrapper'>    
            <h3>Log In to MyGallery</h3>
            <form className='form'>  
                <input placeholder='Введите ваш логин'/>
                <input placeholder='Введите ваш пароль'/>
                <input type='checkbox' id='rememberMe' />
                
            </form>
    </div>
}
export default LogIn
