import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <h1 className="logo">Learnio</h1>
            </div>
            <div className="nav-buttons">
                <button className="nav-btn">Courses</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Mentors</button>
                <button className="Login-Signup"><span>Join Now</span></button>
            </div>
        </nav>
    )
}


export default Navbar;