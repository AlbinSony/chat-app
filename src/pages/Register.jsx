import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">MyCHAT</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>Do You Have an Account?Login</p>
        </div>
    </div>
  )
}

export default Register