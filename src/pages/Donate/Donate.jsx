import React from "react";
import Grid from "../../UI/Grid";
import image from "../../assets/bookstack.png";
import styles from "./Donate.module.css";
import Wrapper from "../../UI/Wrapper";
import DonateForm from "./DonateForm";

const Donate = () => {
  return (
    <Wrapper>
      <Wrapper />
      <Grid
        gridColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
        justifyGridItems={"center"}
      >
        <div className={styles.textContainer}>
          <h1>
            Donate a <span>Book</span>
          </h1>
          <p>
            Please fill out the following details to upload the book for
            donation. Please be advised, If uncomfortable with providing your
            details.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="stack of books" />
        </div>
      </Grid>
      <DonateForm />
    </Wrapper>
  );
};

export default Donate;
