import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";


const Template = ({title, des1, des2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1 className='title'>{title}</h1>
            <p className='flex flex-col text-center my-7'>
                <span>{des1}</span>
                <span>{des2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='parent-or'>
                <div className='or'></div>
                <p>OR</p>
                <div className='or' ></div>
            </div>
            <button className='google'>
            <FcGoogle />Sign in with Google
            </button>
        </div>
    </div>
  )
}

export default Template