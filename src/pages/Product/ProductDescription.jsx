import React from "react";
import shareIcon from "../../assets/share.svg";
import styles from "./ProductDescription.module.css";

const ProductDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      {" "}
      <p style={{ fontFamily: "EB Garamound" }}>Posted on | Jul 12,2021</p>
      <h2 style={{ marginTop: "0px" }}>Working Well</h2>
      <img
        style={{ float: "right", marginTop: "8px" }}
        src={shareIcon}
        alt=""
      />
      <p
        style={{
          color: "var(--color-purple)",
          fontFamily: "EB Garamound",
          fontSize: "20px",
          marginTop: "0px",
        }}
      >
        By Dr John Brifa
      </p>
      <hr />
      <h4 style={{ display: "inline-block" }}>Condition</h4>
      <p
        style={{
          display: "inline-block",
          paddingLeft: "20px",
          color: "var(--color-blackish)",
        }}
      >
        Good
      </p>
      <hr />
      <h4>Description</h4>
      <p
        style={{
          fontFamily: "EB Garamound",
          fontSize: "18px",
          marginTop: 0,
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
};

export default ProductDescription;
