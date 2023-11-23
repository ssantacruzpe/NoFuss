import React from 'react';
import "./FilterOwner.css";

function FilterOwner({ owners, onOwnerSelect }) {
    return (
        <div className="filter-owner">
            <p>Filter tasks by Owner</p>
                <select onChange={(e) => onOwnerSelect(e.target.value)}>
                    <option value="">All Owners</option>
                    {owners.map((owner, index) => (
                        <option key={index} value={owner}>{owner}</option>
                    ))}
                </select>
        </div>
    );
}

export default FilterOwner;