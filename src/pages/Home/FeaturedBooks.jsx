import React from "react";
import BookContainer from "../../UI/BookContainer";
import Grid from "../../UI/Grid";
import styles from "./FeaturedBooks.module.css";

import Wrapper from "../../UI/Wrapper";

const FeaturedBooks = (props) => {
  return (
    <Wrapper>
      <div className={styles.featuredBooks}>
        <h2>
          Books Near <span>You</span>
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <Grid
        gridColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        gridRows="auto"
      >
        <BookContainer
          bookImage={require("../../assets/book-a.png")}
          bookName={"Working Well"}
          author={"By Dr John Brifa"}
        />
        <BookContainer
          bookImage={require("../../assets/book-b.png")}
          bookName={"Working Well"}
          author={"By Dr John Brifa"}
        />
        <BookContainer
          bookImage={require("../../assets/book-c.png")}
          bookName={"Working Well"}
          author={"By Dr John Brifa"}
        />
        <BookContainer
          bookImage={require("../../assets/book-d.png")}
          bookName={"Working Well"}
          author={"By Dr John Brifa"}
        />
      </Grid>
    </Wrapper>
  );
};

export default FeaturedBooks;
