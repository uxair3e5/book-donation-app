import React from "react";
import qouteMark from "../../../assets/qoute-mark.svg";
import styles from "./TestimonialWrapper.module.css";

const TestimonialWrapper = (props) => {
  const fillColor =
    "invert(55%) sepia(10%) saturate(425%) hue-rotate(180deg) brightness(93%) contrast(88%)";
  let filterColor;
  if (props.fill) {
    filterColor = fillColor;
  }

  return (
    <>
      <div
        className={styles.cardStyling}
        style={{ backgroundColor: props.backgroundColor }}
      >
        <h4>{props.name}</h4>

        <p className={styles.testimony} style={{ color: props.color }}>
          <span>
            <img
              src={qouteMark}
              alt="Qoutation Mark"
              className={styles.qMark}
              style={{ filter: filterColor }}
            />
          </span>
          {props.comment}
        </p>
      </div>
    </>
  );
};

export default TestimonialWrapper;
