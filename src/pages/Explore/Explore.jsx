import React from "react";
import Grid from "../../UI/Grid";
import BookSearch from "./BookSearch";
import ScrollButton from "../../UI/ScrollButton";
import Button from "../../UI/Button";
import styles from "./Explore.module.css";
import BooksContainer from "./BooksContainer";
import CallToAction from "../../layout/CallToAction";
import Wrapper from "../../UI/Wrapper";

const Explore = () => {
  const categoryArray = [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
  ];

  return (
    <>
      <BookSearch />
      <Wrapper>
        <div
          className={styles.categoryTypesContainer}
          style={{ paddingTop: "30px" }}
        >
          <h2>Categories</h2>
          <Grid gridColumns={"50px 1fr 50px"} columnGap={10}>
            <ScrollButton
              arrowDirection="left"
              backgroundColor={"var(--color-faintYellow)"}
            />
            <div style={{ overflowX: "auto", width: "100%" }}>
              <Grid
                gridColumns={"repeat(auto-fit, minmax(160px, 1fr))"}
                flow={"column"}
                columnGap={20}
                justifyGridItems={"center"}
              >
                {categoryArray.map((category, index) => {
                  return (
                    <Button
                      key={index}
                      holder={category}
                      btnBackground={"var(--color-white)"}
                      btnBorder={"2px solid var(--color-yellow)"}
                      btnHeight={"45px"}
                      btnWidth={"12em"}
                    />
                  );
                })}
              </Grid>
            </div>
            <ScrollButton />
          </Grid>
        </div>
      </Wrapper>

      <BooksContainer />
      <CallToAction />
    </>
  );
};

export default Explore;
