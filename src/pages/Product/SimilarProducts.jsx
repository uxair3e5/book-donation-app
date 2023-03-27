import React from "react";
import Grid from "../../UI/Grid";
import ScrollButton from "../../UI/ScrollButton";
import BookContainer from "../../UI/BookContainer";
import styles from "./SimilarProducts.module.css";

const SimilarProducts = () => {
  const booksArray = ["book-a", "book-b", "book-c", "book-d"];

  return (
    <>
      <div className={styles.container}>
        <h2>
          Smilar To Your Search <span>Book</span>
        </h2>
        <Grid gridColumns={"50px 4fr 50px"} alignGridItems={"center"}>
          <ScrollButton arrowDirection={"left"} />
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Grid
              gridColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
              flow={"column"}
              gridRows={"auto"}
              columnGap={10}
              rowGap={10}
            >
              {booksArray.map((book, index) => {
                return (
                  <div key={index} className={styles.bookContainer}>
                    <BookContainer
                      bookImage={require(`../../assets/${book}.png`)}
                      bookName={"Working Well"}
                      author={"By Dr John Brifa"}
                    />
                  </div>
                );
              })}
            </Grid>
          </div>
          <ScrollButton />
        </Grid>
      </div>
    </>
  );
};

export default SimilarProducts;
