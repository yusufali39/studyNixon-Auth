import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to={"/"} className='logo'>
            <h1>studyNixon</h1>
        </Link>
        <nav className=''>
            <ul className='flex gap-3'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/about"}>About</Link>
                </li>

                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login Signup Logout Dashboard */}

        <div className='flex gap-x-3'>
            { !isLoggedIn &&
                <Link to={"/login"}>
                <button className='bg-zinc-800 py-[5px] px-[12px] rounded-[8px] border border-slate-950'>Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to={"/signup"}>
                <button className='bg-zinc-800 py-[5px] px-[12px] rounded-[8px] border border-slate-950'>Signup</button>
                </Link>
            } 
            { isLoggedIn &&
                <Link to={"/login"}>
                <button className='bg-zinc-800 py-[5px] px-[12px] rounded-[8px] border border-slate-950'
                    onClick={() => {
                    setIsLoggedIn(false)
                    toast.success("Logged Out")
                }}>Logout</button>
                </Link>
            }            
            { isLoggedIn &&
                <Link to={"/dashboard"}>
                <button className='bg-zinc-800 py-[5px] px-[12px] rounded-[8px] border border-slate-950'>Dashboard</button>
                </Link>
            }  
        </div>
    </div>
  )
}

export default Navbar