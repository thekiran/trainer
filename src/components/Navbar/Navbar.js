import React from 'react'

import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-content">
            <div className="brand">
               <h1 className="logo">
                   Trainer </h1>
            </div>

            <ul className="nav-links">
             <li className="nav-link">Blog</li>   
             <li className="nav-link">Contact us</li>   
            </ul>

            <div className="btn-md">Get the app</div>
            </div>
        </div>
    )
}

export default Navbar
