import React from "react";
import Grid from "../../../UI/Grid";
import CategoryWrapper from "./CategoryWrapper";
import styles from "./Categories.module.css";
import ScrollButton from "../../../UI/ScrollButton";
import Wrapper from "../../../UI/Wrapper";

const Categories = () => {
  return (
    <Wrapper>
      <h2
        style={{
          fontSize: "32px",
          marginLeft: "54px",
          marginRight: "auto",
          color: "#131C2F",
        }}
      >
        Categories
      </h2>
      <Grid
        gridColumns={"50px 8fr 50px"}
        columnGap={5}
        alignGridItems={"center"}
      >
        <ScrollButton arrowDirection="left" />
        <div className={styles.containerSetting}>
          <Grid gridColumns={"repeat(6,1fr)"} flow={"column"} columnGap={20}>
            <CategoryWrapper title={"Science"} />
            <CategoryWrapper title={"Maths"} themeColor={"yellow"} />
            <CategoryWrapper title={"English"} themeColor={"red"} />
            <CategoryWrapper title={"Biology"} themeColor={"green"} />
            <CategoryWrapper title={"Arts"} themeColor={"blue"} />
            <CategoryWrapper title={"Science"} themeColor={"purple"} />
            <CategoryWrapper title={"Computer"} themeColor={"yellow"} />
          </Grid>
        </div>
        <ScrollButton arrowDirection="right" />
      </Grid>
    </Wrapper>
  );
};

export default Categories;
