import React from 'react';

function SearchFilter({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search by task name..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchFilter;
