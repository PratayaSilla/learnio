import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">Learnio</Link>
            </div>

            <div className="nav-buttons">
                <button className="nav-btn">Courses</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Mentors</button>

                {/* ✅ Routing button — already great */}
                <Link to="/signup" className="Login-Signup">Join Now</Link>
            </div>
        </nav>
    );
};

export default Navbar;
