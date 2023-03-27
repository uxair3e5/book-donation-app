import React from "react";
import Grid from "../../UI/Grid";
import styles from "./DonateForm.module.css";
import uploadIcon from "../../assets/upload.svg";
import mapImage from "../../assets/map.png";
import Button from "../../UI/Button";
import Wrapper from "../../UI/Wrapper";

const DonateForm = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <Wrapper>
          <Grid gridColumns={"repeat(auto-fit, minmax(300px, 1fr)"}>
            <div className={styles.formSubContainer}>
              <h3>Book Information</h3>

              <button style={{ paddingBottom: "10px" }}>
                <img src={uploadIcon} alt="" />
                Upload
              </button>

              <label htmlFor="book-name">
                Book title <span>*</span>
              </label>
              <input
                type="text"
                name="book-name"
                placeholder="Enter book name"
              />

              <label htmlFor="author-name">
                Author Name <span>*</span>
              </label>
              <input
                type="text"
                name="author-name"
                placeholder="Enter author name"
              />

              <label htmlFor="book-name">
                Condition <span>*</span>
              </label>
              <div className={styles.conditionBtns}>
                <button>New</button>
                <button>Good</button>
                <button>Fair</button>
                <button>Used</button>
              </div>

              <label htmlFor="book-detail">Description</label>
              <textarea
                name="book-detail"
                cols="30"
                rows="8"
                placeholder="Book details..."
              ></textarea>
              <h3>Your Location</h3>
              <label htmlFor="city-name">
                City <span>*</span>
              </label>
              <input type="text" name="city-name" placeholder="City name" />
              <div className={styles.mapContainer}>
                <img src={mapImage} alt="google map" />
                <div className={styles.mapPin}>
                  <div className={styles.pin}></div>
                </div>
              </div>
              <Button
                btnWidth={"100%"}
                btnHeight={"40px"}
                holder={"DONATE BOOK"}
                btnBackground={"var(--color-yellow)"}
                btnColor={"var(--color-purple"}
              />
            </div>

            <div className={styles.liveBookSearch}>
              <h4>Live Search</h4>
              <p>
                Automated search will identify book titles as soon as you type.
              </p>
            </div>
          </Grid>
        </Wrapper>
      </div>
    </>
  );
};

export default DonateForm;
