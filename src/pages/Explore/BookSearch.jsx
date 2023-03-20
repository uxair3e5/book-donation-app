import React from "react";
import Wrapper from "../../UI/Wrapper";
import Grid from "../../UI/Grid";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./BookSearch.module.css";

const BookSearch = () => {
  const labelStyle = {
    display: "block",
    paddingLeft: "3px",
    color: "#f7cc50",
    fontWeight: 500,
    fontSize: "14px",
    fontFamily: "Poppins",
    paddingBottom: "20px",
  };

  return (
    <Wrapper>
      <div className={styles.container}>
        <Grid
          gridColumns={"auto auto auto"}
          flow={"column"}
          justifyGrid={"center"}
          columnGap={25}
          justifyGridItems={"center"}
        >
          <div>
            <label for="book-search" style={labelStyle}>
              Search book
            </label>
            <Input
              type="text"
              name="book-search"
              placeholder="Search by author, title, name"
              inputWidth="30vw"
              inputHeight="50px"
            />
          </div>

          <div>
            <label for="loc-search" style={labelStyle}>
              Your location
            </label>
            <Input
              type="text"
              name="loc-search"
              placeholder="Nearby You"
              inputWidth="22vw"
              inputHeight="50px"
            />
          </div>
          <div style={{ alignSelf: "center", marginTop: "36px" }}>
            <Button holder="DONATE" btnHeight={"50px"} btnWidth={"12vw"} />
          </div>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default BookSearch;
