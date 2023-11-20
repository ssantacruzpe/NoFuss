import React from 'react';
import "./NavBar.css"; 

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">NoF</div>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/house">House</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;