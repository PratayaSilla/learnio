import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <a href="#" className="logo">Learnio</a>
            </div>
            <div className="nav-buttons">
                <button className="nav-btn">Courses</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Mentors</button>
                <button className="Login-Signup">Join Now</button>
            </div>
        </nav>
    )
}


export default Navbar;