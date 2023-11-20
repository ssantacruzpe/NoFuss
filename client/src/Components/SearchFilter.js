import React from 'react';
import "./SearchFilter.css";

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
