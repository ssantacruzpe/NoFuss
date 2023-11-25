import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; 

function FilterOwner({ owners, onOwnerSelect }) {
    return (
        <div className="filter-owner">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            <select onChange={(e) => onOwnerSelect(e.target.value)} className="owner-select">
                <option value="">All Owners</option>
                {owners.map((owner, index) => (
                    <option key={index} value={owner}>{owner}</option>
                ))}
            </select>
        </div>
    );
}

export default FilterOwner;
