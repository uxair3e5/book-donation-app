import React from "react";
import SearchBar from "../UI/SearchBar";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <SearchBar />
        <div className={styles.regButtons}>
          <a href="./login.html">Login</a>
          <a href="./signup.html">Sign Up</a>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
