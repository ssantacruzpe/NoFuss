import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchFilter.css";

function SearchFilter({ onSearch }) {
    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search by task name..." onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

export default SearchFilter;
