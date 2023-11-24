import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TopBar.css";

function TopBar() {

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/landing/userInfo', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                });
                setUserName(response.data.userName);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);
    
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="top-hi">
            <div className="nav-content">
                <h1>Hello {userName}</h1>
                <h4>Today is {dateString}</h4>
            </div>
        </div>
    );
}

export default TopBar;
