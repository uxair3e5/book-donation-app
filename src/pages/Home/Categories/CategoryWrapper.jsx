import React from "react";
import styles from "./CategoryWrapper.module.css";

const CategoryWrapper = (props) => {
  return (
    <div className={styles.cateContainer}>
      <p className={styles.title} data-color={props.themeColor}>
        {props.title}
      </p>

      <div className={styles.cateDescription}>
        <p>
          {props.bookCount}
          <br />
          Books
        </p>
        <button type="button" data-color={props.themeColor}>
          View
        </button>
      </div>
    </div>
  );
};

export default CategoryWrapper;
