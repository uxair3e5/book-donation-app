import React from "react";
import Grid from "../../UI/Grid";
import Wrapper from "../../UI/Wrapper";
import styles from "./BooksContainer.module.css";
import BookContainer from "../../UI/BookContainer";

const BooksContainer = () => {
  const books = [
    "book-a",
    "book-b",
    "book-c",
    "book-d",
    "book-e",
    "book-f",
    "book-g",
    "book-h",
    "book-i",
    "book-j",
    "book-k",
    "book-l",
    "book-m",
    "book-n",
    "book-o",
    "book-p",
    "book-q",
    "book-r",
    "book-s",
    "book-t",
  ];

  return (
    <Wrapper>
      <div className={styles.container}>
        <Grid gridColumns={"repeat(2,1fr)"} flow={"column"}>
          <h2>Books Near You</h2>
          <p>{books.length} results</p>
        </Grid>
        <div style={{ width: "100%" }}>
          <Grid
            gridColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
            gridRows={"auto"}
            columnGap={25}
            rowGap={10}
          >
            {books.map((book, index) => {
              return (
                <BookContainer
                  key={index}
                  bookImage={require(`../../assets/${book}.png`)}
                  bookName={"Working Well"}
                  author={"By Dr John Brifa"}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default BooksContainer;
