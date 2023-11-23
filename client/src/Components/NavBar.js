import React from 'react';
import "./NavBar.css"; 

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href = "http://localhost:3001/welcome">
                    <span className="logo">NoFuss</span>
                </a>
                <hr/>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="http://localhost:3001/welcome">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3001/hh">
                                Project Board
                            </a>
                        </li>
                        
                    </ul>
                <hr/>
                    <li className="logout">
                            <a href="#">
                                LogOut
                            </a>
                        </li>
            </div>
        </div>
    );
}

export default NavBar;
