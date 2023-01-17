import React from 'react';
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">MyCHAT</span>
            <span className="title">Login</span>
            <form>
                
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign In </button>
            </form>
            <p>You Dont Have an Account? Register</p>
        </div>
    </div>
  )
}

export default Login