import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
      const navigate = useNavigate(); 
    return (
        <nav className="navbar">
            <div className="logo-container">
                <button className="logo" onClick={()=>navigate('/')}>Learnio</button>
            </div>

            <div className="nav-buttons">
                <button className="nav-btn" onClick={() => navigate('/courses')}>Courses</button>
                <button className="nav-btn" onClick={() => navigate('/mentors')}>Mentors</button>


                <button className="Login-Signup" onClick={()=>navigate('/signup')}>Join Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
