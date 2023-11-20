import React from 'react';

function FilterOwner({ owners, onOwnerSelect }) {
    return (
        <select onChange={(e) => onOwnerSelect(e.target.value)}>
            <option value="">All Owners</option>
            {owners.map((owner, index) => (
                <option key={index} value={owner}>{owner}</option>
            ))}
        </select>
    );
}

export default FilterOwner;