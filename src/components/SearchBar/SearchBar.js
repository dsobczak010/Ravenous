import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best-match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    // Function to get CSS class for active sorting option
    const getSortClass = (option) => (sortBy === option ? styles.active : "");

    // Function to handle sorting option change
    const handleSortChange = (option) => {
        setSortBy(option);
    };

    // Function to handle the search button click
    const handleSearch = () => {
        if (searchTerm && location) {
            onSearch(searchTerm, location, sortBy);
        }
    };

    return (
        <div className={styles.searchBar}>
            {/* Sorting Options */}
            <div className={styles.sortOptions}>
                <ul>
                    {Object.keys(sortByOptions).map((option) => (
                        // const [firstLine, secondLine] = option.split(" ");
                        <li
                            key={sortByOptions[option]}
                            className={`${styles.sortOptions} ${getSortClass(sortByOptions[option])}`}
                            onClick={() => handleSortChange(sortByOptions[option])}
                        >
                            <span>{option.split(" ")[0]}</span>
                            <span>{option.split(" ")[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        

            {/* Search Inputs */}
            <div className={styles.searchInputs}>
                <input
                    type="text"
                    placeholder="Search Businesses"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            {/* Search Button */}
            <button onClick={handleSearch}>Let's Go</button>
        </div>
    )
}

export default SearchBar;