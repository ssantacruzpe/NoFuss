import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; 

function FilterOwner({ owners, onOwnerSelect }) {
    return (
        <div className="filter-owner">
            <div className="owner-box">
                <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                <select className="owner-select" onChange={(e) => onOwnerSelect(e.target.value)} >
                    <option value="">All Owners</option>
                    {owners.map((owner, index) => (
                        <option key={index} value={owner}>{owner}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FilterOwner;
