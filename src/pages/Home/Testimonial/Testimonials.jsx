import React from "react";
import Grid from "../../../UI/Grid";
import ScrollButton from "../../../UI/ScrollButton";
import TestimonialWrapper from "./TestimonialWrapper";
import styles from "./Testimonials.module.css";
import Wrapper from "../../../UI/Wrapper";

const Testimonials = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#131C2F" }}>
          Our Happy <span style={{ color: "#F7CC50" }}>Donee</span>
        </h2>
        <p
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={styles.containerSetting}>
          <Grid
            gridColumns={"auto"}
            gridRows={"auto"}
            columnGap={30}
            rowGap={10}
            flow={"column"}
          >
            <TestimonialWrapper
              name={"Willeum Burgh"}
              comment={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              }
            />
            <TestimonialWrapper
              name={"Willeum Burgh"}
              comment={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              }
              color={"#7D8491"}
              backgroundColor={"#F4F7FC"}
              fill={"#7D8491"}
            />
            <TestimonialWrapper
              name={"Willeum Burgh"}
              comment={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              }
            />
            <TestimonialWrapper
              name={"Willeum Burgh"}
              comment={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              }
              color={"#7D8491"}
              backgroundColor={"#F4F7FC"}
              fill={"#7D8491"}
            />
          </Grid>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Grid gridColumns={"1fr 1fr"} columnGap={20}>
            <div style={{ justifySelf: "end" }}>
              <ScrollButton
                arrowDirection={"left"}
                backgroundColor={"#F7CC5033"}
              />
            </div>
            <ScrollButton />
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
