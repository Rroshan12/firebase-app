import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../assets/crown.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="lefty">
                <img src={Logo} alt="crown" />

            </div>
            <div className = "righty">
                <Link className="link" to="/sigin" >Signin</Link>
                <Link className="link" to="/sigup" >SignUp</Link>
            </div>
            
        </div>
    )
}

export default Navbar
