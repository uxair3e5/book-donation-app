import React from "react";
import leftArrow from "../assets/Vector-left.svg";
import rightArrow from "../assets/Vector-right.svg";
import styles from "./ScrollButton.module.css";

const ScrollButton = (props) => {
  return (
    <>
      <div>
        <button
          className={styles.scrollBtnStyle}
          style={{ backgroundColor: props.backgroundColor }}
        >
          {props.arrowDirection === "left" ? (
            <img src={leftArrow} alt="scroll left" />
          ) : (
            <img src={rightArrow} alt="scroll right" />
          )}
        </button>
      </div>
    </>
  );
};

export default ScrollButton;
