import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'


const Login = ({ setLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login'>
            <form className="login-container">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-inputs">
                    {currState === 'Login' ? <></> : <input type="text" placeholder='Enter Your Name' required />}

                    <input type="email" placeholder="Enter Your Email id" required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="login-condition">
                    <input type="checkbox" readOnly />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === 'Login' ? <p>Create a new account? <span onClick={()=>setCurrState('Sign Up')} >Click here</span></p> : <p>Already have an account? <span onClick={()=>setCurrState('Login')} >Login here</span></p>}


            </form>
        </div>
    )
}

export default Login