import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"; 

const NavBar = () => {
    return (
        <div className="navbar">
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
            <a href = "/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="logo">NoFuss</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a href="http://localhost:3001/welcome" className = "nav-link active" aria-current = "page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="http://localhost:3001/hh" className="nav-link link-dark">
                        House Hurdles
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        LogOut
                    </a>
                </li>
            </ul>
            <hr/>
        </div>
        </div>
    );
}

export default NavBar;
