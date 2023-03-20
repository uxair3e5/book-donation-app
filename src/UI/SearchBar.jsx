import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search by author, title, name" />
      </div>
    </div>
  );
};

export default SearchBar;
