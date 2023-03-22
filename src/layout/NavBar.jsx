import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className={styles.navBar}>
        <ul>
          <li id="home">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"explore"}>Explore</NavLink>
          </li>
          <li>
            <NavLink to={"donate"}>Donate</NavLink>
          </li>
          <li>
            <NavLink to={"contactus"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
