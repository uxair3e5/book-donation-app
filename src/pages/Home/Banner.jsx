import React from "react";
import Grid from "../../UI/Grid";
import styles from "./Banner.module.css";
import Button from "../../UI/Button";
import Wrapper from "../../UI/Wrapper";
import picture from "../../assets/pexels-anthony-shkraba-5893844-removebg copy 1.png";

const Banner = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <Grid
          gridColumns={"repeat(auto-fit, minmax(450px, 1fr))"}
          gridRows={"auto"}
        >
          <div className={styles.bannerText}>
            <h1>
              <span>We</span> Donate.
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <Button holder={"DONATE"} btnHeight={"45px"} btnWidth={"30%"} />
          </div>

          <div className={styles.bannerImage}>
            <div className={styles.backgroundCircle}>
              <img src={picture} alt="Reading a book" />
            </div>
          </div>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default Banner;
