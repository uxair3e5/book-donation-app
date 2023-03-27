import React from "react";
import Grid from "../../../UI/Grid";
import CategoryWrapper from "./CategoryWrapper";
import styles from "./Categories.module.css";
import ScrollButton from "../../../UI/ScrollButton";
import Wrapper from "../../../UI/Wrapper";

const Categories = (props) => {
  const categoryData = [
    { id: 1, subject: "Science", themeColor: "purple" },
    { id: 2, subject: "Maths", themeColor: "red" },
    { id: 3, subject: "English", themeColor: "green" },
    { id: 4, subject: "Biology", themeColor: "blue" },
    { id: 5, subject: "Arts", themeColor: "blackish" },
    { id: 6, subject: "Computer", themeColor: "darkGray" },
    { id: 7, subject: "Technology", themeColor: "yellow" },
    { id: 8, subject: "History", themeColor: "purple" },
  ];

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
            {categoryData.map((category) => {
              return (
                <CategoryWrapper
                  key={category.id}
                  title={category.subject}
                  themeColor={category.themeColor}
                />
              );
            })}
          </Grid>
        </div>
        <ScrollButton arrowDirection="right" />
      </Grid>
    </Wrapper>
  );
};

export default Categories;
