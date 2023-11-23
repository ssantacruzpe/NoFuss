import React from 'react';
import "./TopBar.css";

function TopBar() {
    
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="top-hi">
            <div className="nav-content">
                <h1>Hello userName</h1>
                <h4>Today is {dateString}</h4>
            </div>
        </div>
    );
}

export default TopBar;
