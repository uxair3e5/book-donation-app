import React from "react";
import styles from "./BookContainer.module.css";

function BookContainer(props) {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.book}>
        <img src={props.bookImage} alt="Book Cover" />
        <h4>{props.bookName}</h4>
        <p>{props.author}</p>
      </div>
    </div>
  );
}

export default BookContainer;
