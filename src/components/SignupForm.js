import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupFrom = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"", 
        lastName:"",
        email:"",
        Password:"",
        confirmPassword:""
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {

        setFormData( ( prevData ) =>({
            
                ...prevData,
                [event.target.name]:event.target.value
            
        } ));
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("password not matched")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        navigate("/dashboard")
    }
  return (
    <div>
    <form onSubmit={submitHandler} className='form2'>
        <div className='flex gap-5'>
        <label>
            <p>First name<sup>*</sup></p>

            <input 
            required
            type='text'
            value={formData.firstName}
            onChange={changeHandler}
            placeholder='Enter first name'
            name='firstName'
            />
        </label>
        <label>
            <p>Last name<sup>*</sup></p>
            
            <input 
            required
            type='text'
            value={formData.lastName}
            onChange={changeHandler}
            placeholder='Enter last name'
            name='lastName'
            />
        </label>
        </div>
        <label>
            <p>Email Address<sup>*</sup></p>

            <input 
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter your email'
            name='email'
            />
        </label>
        <div className='flex gap-5'>
        <label>
            <p>Create Password<sup>*</sup></p>

            <input 
            required
            type={showPassword ? ("text"): ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='create password'
            name='password'
            />
        </label>
        <label>
            <p>Confirm Password<sup>*</sup></p>
            <div className='flex'>
            <input 
            required
            type={showPassword ? ("text"): ("password")}
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder='confirm password'
            name='confirmPassword'
            />
            <span className='eye2' onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
            </div>
        </label>
        </div>
        <button className='signup'>
            Create Account
        </button>

    </form>
    </div>
  )
}

export default SignupFrom