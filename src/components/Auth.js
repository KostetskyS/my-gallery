import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/style/logIn.css';
import { useForm } from 'react-hook-form';

function Auth({ isLogin, submitHandler }) {
    const {  
        register,
        reset,
        formState: {
            errors,
            isValid,
        }, 
        handleSubmit,
       } = useForm({ mode: 'onBlur' });
       
    return <div className='logInWrapp'>    
        {isLogin && <h3>Log In to MyGallery</h3>}
        {!isLogin && <h3>Register in MyGallery</h3>}

        <form onSubmit={handleSubmit(submitHandler)} className='formLogIn'> 
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
            },
            maxLength: {
                value: 24,
                message: 'password cannot contain more than 24 characters',
            }
            })}
            type='password'
            placeholder='Введите ваш пароль'/>

            <div>   
                {errors?.password && <p style={{color: 'white'}}>{errors?.password?.message}</p>}
            </div>

            {!isLogin && (
                <>
                    <input
                        {...register('password2', {
                        required: 'password must contain 8 characters',
                            minLength: {
                            value: 8,
                            message: 'password must contain 8 characters',
                        },
                            maxLength: {
                            value: 24,
                            message: 'password cannot contain more thasn 24 characters',
                        }
                        })}
                        type='password'
                        placeholder='Повторите пароль'
                        />

                    <div>   
                        {errors?.password && <p style={{color: 'white'}}>{errors?.password2?.message}</p>}
                    </div>

                    <div>
                        {errors.password !== errors.password2 &&  <p style={{color: 'white'}}>{errors?.password2?.message}</p>};  
                    </div>   
                    <Button type='submit' className="btn btn-secondary" disabled={!isValid}>Register</Button>
                </>
            )}
                {isLogin && <Button type='submit' className="btn btn-secondary" disabled={!isValid}>Log In</Button>}
        </form>
    </div>
}

export default Auth;