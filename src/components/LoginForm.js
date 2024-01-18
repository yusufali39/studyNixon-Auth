import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast' 
import "../App.css"

const LoginFrom = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    
    function changeHandler(event) {

        setFormData( ( prevData ) =>({
            
                ...prevData,
                [event.target.name]:event.target.value
            
        } ));
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler} className='form'>
        <label>
            <p className='label'>Email Address<sup>*</sup></p>

            <input 
            className='input'
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter your email'
            name='email'
            />
        </label>
        <label>
            <p className='label'>Password<sup>*</sup></p>
            <div className='flex'>
            <input 
            className='input'
            required
            type={showPassword ? ("text"): ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter your password'
            name="password"
            />
            <span className='eye' onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
            </div>
            
        </label>



        <Link to="#">
            <p className='forget'>
                forgot password ?
            </p>
        </Link>
        
            <button className='signin'>Sign in</button>
    </form>
  )
}

export default LoginFrom;