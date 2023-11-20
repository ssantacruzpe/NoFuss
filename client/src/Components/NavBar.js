import React from 'react';
import "./NavBar.css"; 

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">NoFuss</div>
            <nav>
                <ul>
                    <li><a href="http://localhost:3001/welcome">Home</a></li>
                    <li><a href="http://localhost:3001/hh">House Hurdles</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;