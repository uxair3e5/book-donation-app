import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BookContainer.module.css";

function BookContainer(props) {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.book}>
        <NavLink to={"product"}>
          <img src={props.bookImage} alt="Book Cover" />
        </NavLink>
        <h4>{props.bookName}</h4>
        <p>{props.author}</p>
      </div>
    </div>
  );
}

export default BookContainer;
