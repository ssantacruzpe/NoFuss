import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchFilter.css";

function SearchFilter({ onSearch }) {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search by task name..." onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

export default SearchFilter;
