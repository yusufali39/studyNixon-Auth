import React from 'react'
import Template from '../components/Template'
import signupImg from "../assests/img.jpg"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Create your account"
    des1="Join the millions learning to code with studyNixon for free"
    des2="Build skills for today, tomorrow and beyond"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup