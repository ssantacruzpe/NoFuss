import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';
import "./NavBar.css"; 

const NavBar = () => {
    let navigate = useNavigate(); 
    let token;
    let decoded;

    try {
        token = localStorage.getItem('token');
        decoded = jwtDecode(token);
        } catch (err) {
          console.log(err);
        }

    const handleLogout = () => {
        if (token) {
          localStorage.removeItem("token");
          navigate("/login");
          window.location.reload()
        } else {
          return;
        }
      }

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
                            <button onClick={handleLogout}>Log Out</button>
                        </li>
            </div>
        </div>
    );
}

export default NavBar;
