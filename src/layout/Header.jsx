import React from "react";
import SearchBar from "../UI/SearchBar";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <SearchBar />
        <div className={styles.regButtons}>
          <NavLink to={"login"}>Login</NavLink>
          <NavLink to={"signup"}>Sign Up</NavLink>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
