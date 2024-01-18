import { Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="w-screen h-screen flex flex-col">

            <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}
export default App;