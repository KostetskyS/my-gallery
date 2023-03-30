import { Button} from 'react-bootstrap';
import React from 'react';
import '../assets/style/logIn.css';
import { useForm} from 'react-hook-form';
function LogIn() {
   const {  
    register,
    reset,
    formState: {
        errors,
        isValid,
    }, 
    handleSubmit,
   } = useForm({
    mode: 'onBlur',
   });
   
  function onSubmit(data) {
    reset()
  }

    return <div className='logInWrapp'>    
                <h3>Log In to MyGallery</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='formLogIn'> 

                    <input
                     {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } 
                     )}
                     type='email'
                     placeholder='Введите ваш логин'
                     />
                    <div>   
                        {errors?.email && <p style={{color: 'white'}}>Incorrect email</p>}
                    </div>
                    <input
                    {...register('password', {
                        required: 'password must contain 8 characters',
                        minLength: {
                            value: 8,
                            message: 'password must contain 8 characters',
                        }
                    })}
                     type='password'
                     placeholder='Введите ваш пароль'/>
                    <div>   
                        {errors?.password && <p style={{color: 'white'}}>{errors?.password?.message}</p>}
                    </div>
                    <lable>
                        <span>Remember me </span>
                         <input type='checkbox' />
                    </lable> 
                    <Button type='submit'  className="btn btn-secondary" disabled={!isValid}>Log In</Button>
                </form>
            </div>
}
export default LogIn
